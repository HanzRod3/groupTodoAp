import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose.config.js";
import taskRouter from "./routes/task.routes.js";

const app = express();
app.use(express.json()); // Correct middleware to parse JSON request bodies.
app.use(cors());

dotenv.config(); // Load environment variables.

dbConnect();

app.use("/create", taskRouter); // Mount the task routes.

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
