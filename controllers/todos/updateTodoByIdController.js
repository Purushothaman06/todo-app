import Todo from "../../models/todoModel.js";

const updateTodoByIdController = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: id, userId: req.userId },
      { title, completed },
      { new: true }
    );
    if (!todo) return res.status(404).json({ error: "To-do not found" });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: "Failed to update to-do" });
  }
};

export default updateTodoByIdController;
