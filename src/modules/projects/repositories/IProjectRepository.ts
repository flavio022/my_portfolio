import Project from "../infra/typeorm/entities/Project";
import ICreateProjectDTO from "../dtos/ICreateProjectDTO";

interface IProjectRepository {
  findAllProjects(): Promise<Project[]>;
  findById(id: string): Promise<Project | undefined>;
  create(data: ICreateProjectDTO): Promise<Project>;
  save(user: Project): Promise<Project>;
}

export default IProjectRepository;
