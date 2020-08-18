import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";
import uploadConfig from "../../../../../config/upload";

import ProjectController from "../controllers/ProjectController";
import multer from "multer";
const upload = multer(uploadConfig.multer);
const projectRouter = Router();

const projectController = new ProjectController();

projectRouter.post("/", upload.single("image"), projectController.create);
projectRouter.get("/", projectController.index);

export default projectRouter;
