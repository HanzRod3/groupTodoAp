import Task from "../models/Task.models.js";

export const createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json({ message: "New Task created.", newTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
