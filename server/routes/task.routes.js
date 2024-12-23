import { createTask } from "../controllers/task.controllers.js"; // Import the controller function for creating tasks.
import { Router } from "express"; // Import Router from Express to define routes.

const taskRouter = Router(); // Create a new router instance.

taskRouter.route("/").post(createTask); // Define a POST route at "/". Calls `createTask` when accessed.

export default taskRouter; // Export the router for use in other parts of the app.
