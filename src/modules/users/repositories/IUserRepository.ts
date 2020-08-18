import User from "../infra/typeorm/entities/User";
import ICreateUserDTO from "../dtos/ICreateUsersDTO";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}

export default IUsersRepository;
