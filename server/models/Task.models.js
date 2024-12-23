import { Schema, model } from "mongoose"; // Import Schema and model from Mongoose.

const SubtaskSchema = new Schema({
  title: {
    required: [true, "subtitle is required."], // Validation: Subtask title is required.
    type: String, // Subtask title must be a string.
  },
  completed: { type: Boolean, default: false }, // Defaults to not completed.
});

const TaskSchema = new Schema(
  {
    title: {
      type: String, // Task title must be a string.
      minLength: 3, // Minimum length of the title.
      maxLength: 255, // Maximum length of the title.
      required: [true, "Title is required."], // Validation: Task title is required.
    },
    urgency: {
      type: String, // Urgency level must be a string.
      enum: ["green", "yellow", "red"], // Valid values for urgency.
      required: [true, "Urgency is required"], // Validation: Urgency is required.
    },
    subtask: {
      type: [SubtaskSchema], // Subtasks are an array of SubtaskSchema.
      default: [], // Default to an empty array if no subtasks are provided.
    },
    completed: {
      type: Boolean, // Completion status must be a boolean.
      required: [true], // Validation: Completion status is required.
      default: false, // Defaults to not completed.
    },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields.
);

const Task = model("Task", TaskSchema); // Create a Mongoose model named "Task" using TaskSchema.

export default Task; // Export the Task model for use in other files.
