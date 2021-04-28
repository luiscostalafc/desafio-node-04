import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): void {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User is not found");
    }

    const userIsAdmin = user.admin === true;

    if (!userIsAdmin) {
      throw new Error("User is not Admin");
    }

    this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
