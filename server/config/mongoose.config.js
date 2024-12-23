import { connect } from "mongoose"; // Import the connect function from Mongoose.
import dotenv from "dotenv"; // For loading environment variables from .env.

dotenv.config(); // Load environment variables.

const dbConnect = async () => {
  try {
    // Connect to MongoDB using the URI from .env and specifying the database name.
    await connect(process.env.MONGODB_URI, { dbName: "group-todo" });
    console.log("✅ MongoDB connected successfully!"); // Log success message.
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message); // Log error message on failure.
  }
};

export default dbConnect; // Export the dbConnect function for use in other files.
