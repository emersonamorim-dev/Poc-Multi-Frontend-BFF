import { RegisterUserController } from "./Application/RegisterUserController";
import { AuthenticateUserController } from "./Application/AuthenticateUserController";
import { GetUserProfileController } from "./Application/GetUserProfileController";
import { RegisterUserUseCase } from "./Domain/UseCases/RegisterUserUseCase";
import { AuthenticateUserUseCase } from "./Domain/UseCases/AuthenticateUser";
import { GetUserProfileUseCase } from "./Domain/UseCases/GetUserProfile";
import { UserRepositoryDatabase } from "./Infrastructure/Persistency/UserRepositoryDatabase";
import { Request, Response } from 'express';

// Funções para criar objetos Request
function createRequest<T = any, P = any>(body: T = {} as T, params: P = {} as P): Request<P, any, T> {
  return {
    body,
    params,
  } as unknown as Request<P, any, T>;
}

function createResponse(): Response {
  const res: Partial<Response> = {
    status: (statusCode: number) => {
      console.log(`Status Code: ${statusCode}`);
      return res as Response;
    },
    json: (body: any) => {
      console.log('Response Body:', body);
      return res as Response;
    },
  };
  return res as Response;
}

async function main() {
  const userRepository = new UserRepositoryDatabase();
  const registerUserUseCase = new RegisterUserUseCase(userRepository);
  const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
  const getUserProfileUseCase = new GetUserProfileUseCase(userRepository);

  const registerUserController = new RegisterUserController(registerUserUseCase);
  const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);
  const getUserProfileController = new GetUserProfileController(getUserProfileUseCase);

  // Cadastro de um usuário
  const registerUserRequest = createRequest(
    { email: 'emerson_tecno@hotmail.com', password: '123456' }
  );
  const registerUserResponse = createResponse();

  try {
    await registerUserController.handle(registerUserRequest, registerUserResponse);
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
  }

  // Autenticação do usuário
  const authenticateUserRequest = createRequest(
    { email: 'emerson_tecno@hotmail.com', password: '123456' }
  );
  const authenticateUserResponse = createResponse();

  try {
    await authenticateUserController.handle(authenticateUserRequest, authenticateUserResponse);
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
  }

  // Obter perfil do usuário
  const getUserProfileRequest = createRequest<{ id: string }, { id: string }>(

    { id: '1' }
  );
  const getUserProfileResponse = createResponse();

  try {
    await getUserProfileController.handle(getUserProfileRequest, getUserProfileResponse);
  } catch (error) {
    console.error('Erro ao obter perfil de usuário:', error);
  }
}

main();
