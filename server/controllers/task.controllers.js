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

export const allTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ message: "Retriving all task...", tasks });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getTaskByID = async (req, res) => {
  const { id } = req.params;
  try {
    const taskById = await Task.findById(id);
    res.status(200).json({ message: "Task Found", taskById });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteById = async (req, res) => {
  const { id } = req.params; // Extract the ID from the request parameters.

  try {
    // Attempt to find and delete the task by its ID.
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      // If no task is found with the given ID, respond with a 404 status.
      return res.status(404).json({ message: "Task not found." });
    }

    // If deletion is successful, respond with a success message.
    res
      .status(200)
      .json({ message: "Task deleted successfully.", deletedTask });
  } catch (error) {
    // Handle any errors that occur during the deletion process.
    res.status(500).json({ message: error.message });
  }
};

export const updateByID = async (req, res) => {
  const { id } = req.params; // Extract the ID from the request parameters.
  const updates = req.body; // Extract the updates from the request body.

  try {
    // Find the task by ID and update it with the provided data.
    const updatedTask = await Task.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document.
      runValidators: true, // Ensure the updates adhere to the model's schema.
    });

    if (!updatedTask) {
      // If no task is found with the given ID, respond with a 404 status.
      return res.status(404).json({ message: "Task not found." });
    }

    // If the update is successful, respond with the updated task.
    res
      .status(200)
      .json({ message: "Task updated successfully.", updatedTask });
  } catch (error) {
    // Handle any errors that occur during the update process.
    res.status(500).json({ message: error.message });
  }
};
