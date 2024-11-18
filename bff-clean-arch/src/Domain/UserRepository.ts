import { User } from "./Entities/User";


export interface UserRepository {
  findUserByEmail(email: string): Promise<User | null>;
  findUserById(id: string): Promise<User | null>;
  saveUser(user: Partial<User>): Promise<User>;
}
