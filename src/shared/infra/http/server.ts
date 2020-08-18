import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import cors from "cors";
import "@shared/container";
import "@shared/infra/typeorm";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("Server is running on port 3333!");
});
