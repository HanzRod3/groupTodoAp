import Task from "../models/Task.models.js"; // Import the Task model.

export const createTask = async (req, res) => {
  try {
    // Create a new task in the database using data from the request body.
    const newTask = await Task.create(req.body);
    res.status(201).json({ message: "New Task created.", newTask }); // Respond with the created task.
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors and send an error response.
  }
};
