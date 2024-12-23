import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbConnect = async () => {
  try {
    await connect(process.env.MONGODB_URI, { dbName: "group-todo" });
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

export default dbConnect;
