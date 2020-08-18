import { injectable, inject } from "tsyringe";
import AppError from "@shared/errors/AppErros";
import Project from "../infra/typeorm/entities/Project";
import IProjectRepository from "../repositories/IProjectRepository";
import IStorageProvider from "@shared/container/providers/StorageProvider/models/IStorageProvider";

interface Request {
  name: string;
  descricao: string;
  url: string;
  git: string;
  image: string;
}
@injectable()
class CreateProjectService {
  constructor(
    @inject("ProjectRepository")
    private projectRepository: IProjectRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  public async execute({
    name,
    descricao,
    url,
    git,
    image
  }: Request): Promise<Project> {
    const filename = await this.storageProvider.saveFile(image);

    const project = await this.projectRepository.create({
      name,
      descricao,
      url,
      git,
      image: filename
    });

    return project;
  }
}
export default CreateProjectService;
