import Todo from "../../models/todoModel.js";

const getTodoByIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findOne({ _id: id, userId: req.userId });
    if (!todo) return res.status(404).json({ error: "To-do not found" });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch to-do" });
  }
};

export default getTodoByIdController;
