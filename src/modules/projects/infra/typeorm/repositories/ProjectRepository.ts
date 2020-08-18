import { EntityRepository, Repository, getRepository, Not } from "typeorm";
import IProjectRepository from "@modules/projects/repositories/IProjectRepository";
import ICreateProjectDTO from "@modules/projects/dtos/ICreateProjectDTO";
import Project from "@modules/projects/infra/typeorm/entities/Project";

@EntityRepository(Project)
class ProjectRepository implements IProjectRepository {
  private ormRepository: Repository<Project>;
  constructor() {
    this.ormRepository = getRepository(Project);
  }

  public async findAllProjects(): Promise<Project[]> {
    let projects: Project[];
    projects = await this.ormRepository.find();

    return projects;
  }

  public async findById(id: string): Promise<Project | undefined> {
    const project = await this.ormRepository.findOne(id);
    return project;
  }

  public async create(projectData: ICreateProjectDTO): Promise<Project> {
    const project = this.ormRepository.create(projectData);
    await this.ormRepository.save(project);
    return project;
  }

  public save(project: Project): Promise<Project> {
    return this.ormRepository.save(project);
  }
}

export default ProjectRepository;
