import { container } from "tsyringe";
import "@modules/users/providers";
import "./providers";

import IUsersRepository from "@modules/users/repositories/IUserRepository";
import UsersRepository from "@modules/users/infra/typeorm/repositories/UserRepository";

import IProjectRepository from "@modules/projects/repositories/IProjectRepository";
import ProjectRepository from "@modules/projects/infra/typeorm/repositories/ProjectRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IProjectRepository>(
  "ProjectRepository",
  ProjectRepository
);
