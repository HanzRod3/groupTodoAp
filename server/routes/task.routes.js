import { createTask } from "../controllers/task.controllers.js";
import { Router } from "express";

const taskRouter = Router();

taskRouter.route("/").post(createTask);

export default taskRouter;
