import { User } from '../Entities/User';
import { UserRepository } from '../UserRepository';

interface GetUserIdRequest {
  id: string;
}

export class GetUserProfileUseCase {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(getUserIdRequest: GetUserIdRequest): Promise<User> {
    const user = await this.userRepository.findUserById(getUserIdRequest.id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  }
}
