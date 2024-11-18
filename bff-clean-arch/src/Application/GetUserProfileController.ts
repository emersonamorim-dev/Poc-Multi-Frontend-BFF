import { Request, Response } from 'express';
import { GetUserProfileUseCase } from '../Domain/UseCases/GetUserProfile';
import { User } from '../Domain/Entities/User';

export type GetUserIdRequest = {
  id: string;
};

type GetUserProfileParams = {
  id: string;
};

export class GetUserProfileController {
  private readonly getUserProfileUseCase: GetUserProfileUseCase;

  constructor(getUserProfileUseCase: GetUserProfileUseCase) {
    this.getUserProfileUseCase = getUserProfileUseCase;
  }

  async handle(req: Request<GetUserProfileParams>, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const user: User = await this.getUserProfileUseCase.execute({ id });
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocorreu um erro inesperado' });
      }
    }
  }
}

