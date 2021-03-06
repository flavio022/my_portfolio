import { EntityRepository, Repository, getRepository, Not } from "typeorm";
import IUsersRepository from "@modules/users/repositories/IUserRepository";
import ICreateUserDTO from "@modules/users/dtos/ICreateUsersDTO";
import User from "@modules/users/infra/typeorm/entities/User";

@EntityRepository(User)
class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User);
  }
  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);
    await this.ormRepository.save(user);
    return user;
  }
  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } });

    return user;
  }
}

export default UsersRepository;
