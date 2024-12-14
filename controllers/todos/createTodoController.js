import Todo from "../../models/todoModel.js";

const createTodoController = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  try {
    const todo = await Todo.create({ userId: req.userId, title });
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: "Failed to create to-do" });
  }
};

export default createTodoController;
