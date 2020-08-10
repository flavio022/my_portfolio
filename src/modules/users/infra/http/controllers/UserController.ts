import { Request, Response } from "express";
class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;

      return response.json({ name, email, password });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default UserController;
