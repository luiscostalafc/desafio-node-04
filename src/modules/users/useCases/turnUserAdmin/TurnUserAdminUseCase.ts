import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): void {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User is not found");
    }

    this.usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };
