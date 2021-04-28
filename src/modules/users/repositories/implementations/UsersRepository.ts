import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      admin: false,
      created_at: new Date(),
    });

    this.users.push(user);
    console.log(user);
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);
    console.log(user);

    return user;
  }

  findByEmail(email: string): User | undefined {
    const userEmail = this.users.find((user) => user.email === email);
    console.log(userEmail);
    return userEmail;
  }

  turnAdmin({ id }: User): void {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error("User is not found.");
    }

    user.admin = true;
    user.updated_at = new Date();
  }

  list(): User[] {
    const allUsers = this.users;
    console.log(allUsers);
    return allUsers;
  }
}

export { UsersRepository };
