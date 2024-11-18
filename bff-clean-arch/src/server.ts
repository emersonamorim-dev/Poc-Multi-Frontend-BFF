import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { AuthenticateUserController } from './Application/AuthenticateUserController';
import { GetUserProfileController } from './Application/GetUserProfileController';
import { RegisterUserController } from './Application/RegisterUserController';
import { AuthenticateUserUseCase } from './Domain/UseCases/AuthenticateUser';
import { GetUserProfileUseCase } from './Domain/UseCases/GetUserProfile';
import { RegisterUserUseCase } from './Domain/UseCases/RegisterUserUseCase';
import { UserRepositoryDatabase } from './Infrastructure/Persistency/UserRepositoryDatabase';

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
    xssFilter: false,
  })
);

const allowedOrigins = ['http://localhost:4200', 'http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000', 'http://127.0.0.1:8080']; // Origens permitidas

// Configuração CORS dinâmica para múltiplas origens
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());

// Inicializando componentes
const userRepository = new UserRepositoryDatabase();
const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
const getUserProfileUseCase = new GetUserProfileUseCase(userRepository);
const registerUserUseCase = new RegisterUserUseCase(userRepository);

const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);
const getUserProfileController = new GetUserProfileController(getUserProfileUseCase);
const registerUserController = new RegisterUserController(registerUserUseCase);

// Endpoint para registrar usuário
app.post('/register', async (req: Request, res: Response) => {
  try {
    await registerUserController.handle(req, res);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
    }
  }
});

// Endpoint para autenticar usuário
app.post('/authenticate', async (req: Request, res: Response) => {
  try {
    await authenticateUserController.handle(req, res);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
    }
  }
});

// Endpoint para obter o perfil do usuário
app.get('/user/:id', async (req: Request<{ id: string }>, res: Response) => {
  try {
    await getUserProfileController.handle(req, res);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
    }
  }
});

// Configurando a porta
const PORT = process.env.PORT || 3081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
