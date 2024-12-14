import Todo from "../../models/todoModel.js";

const deleteTodoByIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findOneAndDelete({ _id: id, userId: req.userId });
    if (!todo) return res.status(404).json({ error: "To-do not found" });
    res.json({ message: "To-do deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete to-do" });
  }
};

export default deleteTodoByIdController;
