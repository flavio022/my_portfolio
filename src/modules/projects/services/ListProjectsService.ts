import { injectable, inject } from "tsyringe";
import AppError from "@shared/errors/AppErros";
import { classToClass } from "class-transformer";
import IProjectRepository from "@modules/projects/repositories/IProjectRepository";

import Project from "@modules/projects/infra/typeorm/entities/Project";

@injectable()
class ListProjectsServices {
  constructor(
    @inject("ProjectRepository")
    private projectRepository: IProjectRepository
  ) {}

  public async execute(): Promise<Project[] | null> {
    let project = await this.projectRepository.findAllProjects();

    return project;
  }
}

export default ListProjectsServices;
