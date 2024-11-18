import { Request, Response } from "express";
import { RegisterUserUseCase } from "../Domain/UseCases/RegisterUserUseCase";

export class RegisterUserController {
  constructor(private registerUserUseCase: RegisterUserUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body;

    if (!name || typeof name !== 'string') {
      res.status(400).json({ error: "O campo de nome é obrigatório" });
      return;
    }

    if (!email || typeof email !== 'string') {
      res.status(400).json({ error: "O campo de e-mail é obrigatório" });
      return;
    }

    if (!password || typeof password !== 'string') {
      res.status(400).json({ error: "O campo de senha é obrigatório" });
      return;
    }

    try {
      const user = await this.registerUserUseCase.execute(name, email, password);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Ocorreu um erro inesperado' });
      }
    }
  }
}
