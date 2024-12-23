import { Schema, model } from "mongoose";

const SubtaskSchema = new Schema({
  title: {
    required: [true, "subtitle is required."],
    type: String,
  },
  completed: { type: Boolean, default: false },
});

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      minLength: 3,
      maxLength: 255,
      required: [true, "Title is required."],
    },
    urgency: {
      type: String,
      enum: ["green", "yellow", "red"],
      required: [true, "Urgency is required"],
    },
    subtask: {
      type: [SubtaskSchema],
      default: [],
    },
    completed: {
      type: Boolean,
      required: [true],
      default: false,
    },
  },
  { timestamps: true }
);

const Task = model("Task", TaskSchema);

export default Task;
