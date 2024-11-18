import { PrismaClient } from '@prisma/client';
import { User } from '../../Domain/Entities/User';
import { UserRepository } from '../../Domain/UserRepository';

const prisma = new PrismaClient();

export class UserRepositoryDatabase implements UserRepository {
  async findUserById(id: string): Promise<User | null> {
    const prismaUser = await prisma.user.findUnique({ where: { id } });
    if (!prismaUser) return null;
    return new User(prismaUser.id, prismaUser.name, prismaUser.email, prismaUser.password); 
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const prismaUser = await prisma.user.findUnique({ where: { email } });
    if (!prismaUser) return null;
    return new User(prismaUser.id, prismaUser.name, prismaUser.email, prismaUser.password);
  }

  async saveUser(user: User): Promise<User> {
    if (!user.name || typeof user.name !== 'string') {
      throw new Error('O campo de nome é obrigatório');
    }

    const prismaUser = await prisma.user.create({
      data: {
        id: user.id,
        name: user.name,  
        email: user.email,
        password: user.password, 
      },
    });

    return new User(prismaUser.id, prismaUser.name, prismaUser.email, prismaUser.password);
  }
}
