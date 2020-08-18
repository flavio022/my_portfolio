import { Router } from "express";
import userRouter from "@modules/users/infra/http/routes/user.routes";
import sessionRouter from "@modules/users/infra/http/routes/session.routes";
import projectsRouter from "@modules/projects/infra/http/routes/projects.routes";
const routes = Router();

routes.use("/user", userRouter);
routes.use("/session", sessionRouter);
routes.use("/projects", projectsRouter);

export default routes;
