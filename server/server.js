import express from "express"; // Importing the Express library to create a server.
import cors from "cors"; // Middleware to enable Cross-Origin Resource Sharing.
import dotenv from "dotenv"; // For loading environment variables from a .env file.
import dbConnect from "./config/mongoose.config.js"; // Custom function to connect to MongoDB.
import taskRouter from "./routes/task.routes.js"; // Importing task routes.

const app = express(); // Initialize the Express application.

app.use(express.json()); // Middleware to parse incoming JSON request bodies.
app.use(cors()); // Middleware to enable requests from other origins (e.g., client-side React app).

dotenv.config(); // Load environment variables from .env file (e.g., MONGODB_URI).

dbConnect(); // Connect to MongoDB using the dbConnect function.

app.use("/create", taskRouter); // Mount the task routes. Requests to "/create" are forwarded to `taskRouter`.

const PORT = process.env.PORT || 8001; // Define the port to listen on (from .env or default to 8001).

// Start the server and listen for incoming requests.
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
