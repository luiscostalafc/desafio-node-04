import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    const userIsAdmin = this.turnUserAdminUseCase.execute({ user_id: id });

    return response.json(userIsAdmin);
  }
}

export { TurnUserAdminController };
