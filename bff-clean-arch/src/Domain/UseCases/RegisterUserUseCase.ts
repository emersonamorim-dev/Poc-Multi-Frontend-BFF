import { User } from "../Entities/User";
import { UserRepository } from "../UserRepository";
//import bcrypt from 'bcrypt';
import bcrypt from 'bcryptjs';

export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string, password: string): Promise<User> {
    const existingUser = await this.userRepository.findUserByEmail(email);
    if (existingUser) {
      throw new Error('Usuário já existe');
    }

    // Hash da senha
    const hashedPassword = this.hashPassword(password);

    const newUser = await this.userRepository.saveUser({ name, email, password: hashedPassword });
    return newUser;
    
  }

  private hashPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
  }
}
