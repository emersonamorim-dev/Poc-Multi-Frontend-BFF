import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from '../Domain/UseCases/AuthenticateUser';

export type AuthenticateUserRequest = {
  email: string;
  password: string;
};

export type AuthenticateUserResponse = {
  token: string;
  user: {
    id: string;
    email: string;
  };
};

export class AuthenticateUserController {
  private readonly authenticateUserUseCase: AuthenticateUserUseCase;

  constructor(authenticateUserUseCase: AuthenticateUserUseCase) {
    this.authenticateUserUseCase = authenticateUserUseCase;
  }

  async handle(req: Request, res: Response): Promise<void> {
    const { email, password }: AuthenticateUserRequest = req.body;

    try {
      const response = await this.authenticateUserUseCase.execute({ email, password });
      res.status(200).json(response);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocorreu um erro inesperado' });
      }
    }
  }
}
