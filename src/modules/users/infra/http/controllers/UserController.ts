import { Request, Response } from "express";
import { classToClass } from "class-transformer";
import { container } from "tsyringe";
import CreateUserService from "@modules/users/services/CreateUserSevices";

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;
      const createUser = container.resolve(CreateUserService);
      const user = await createUser.execute({
        name,
        email,
        password
      });
      return response.json(classToClass(user));
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
