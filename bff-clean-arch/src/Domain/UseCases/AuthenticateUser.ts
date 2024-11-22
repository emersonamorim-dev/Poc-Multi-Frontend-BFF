import { generateToken } from '../../Infrastructure/utils/tokenUtils';
import { User } from '../Entities/User';
import { UserRepository } from '../UserRepository';
//import bcrypt from 'bcrypt';
import bcrypt from 'bcryptjs';


interface AuthenticateUserRequest {
  email: string;
  password: string;
}

interface AuthenticateUserResponse {
  user: User;
  token: string;
}

export class AuthenticateUserUseCase {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(authenticateUserRequest: AuthenticateUserRequest): Promise<AuthenticateUserResponse> {

    const user = await this.userRepository.findUserByEmail(authenticateUserRequest.email);
    
    if (!user || !await this.validatePassword(user, authenticateUserRequest.password)) {
      throw new Error('E-mail ou senha inválidos');
    }

    // Gera o token JWT para autenticação
    const token = generateToken(user.id);

    return { user, token };
  }

  private async validatePassword(user: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }
}

