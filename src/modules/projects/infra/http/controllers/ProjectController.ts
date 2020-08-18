import { Request, Response } from "express";
import { classToClass } from "class-transformer";
import { container } from "tsyringe";
import CreateProjectService from "@modules/projects/services/CreateProjectService";
import ListProjectService from "@modules/projects/services/ListProjectsService";

export default class ProjectController {
  public async index(request: Request, response: Response): Promise<Response> {
    const showProject = container.resolve(ListProjectService);
    const project = await showProject.execute();

    return response.json(classToClass(project));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, descricao, url, git } = request.body;
      const createProject = container.resolve(CreateProjectService);
      const project = await createProject.execute({
        name,
        descricao,
        url,
        git,
        image: request.file.filename
      });
      return response.json(classToClass(project));
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
