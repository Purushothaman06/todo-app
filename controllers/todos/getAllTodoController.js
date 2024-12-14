import Todo from "../../models/todoModel.js";

const getAllTodoController = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.userId });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch to-dos" });
  }
};

export default getAllTodoController;
