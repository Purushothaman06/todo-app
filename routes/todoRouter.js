import express from "express";
import authenticateToken from "../middleware/authMiddleware.js";
import addTodoLimiter from "../middleware/rateLimiter.js";
import createTodoController from "../controllers/todos/createTodoController.js";
import getAllTodoController from "../controllers/todos/getAllTodoController.js";
import getTodoByIdController from "../controllers/todos/getTodoByIdController.js";
import updateTodoByIdController from "../controllers/todos/updateTodoByIdController.js";
import deleteTodoByIdController from "../controllers/todos/deleteTodoByIdController.js";

const todoRouter = express.Router();

todoRouter.post("/", authenticateToken, addTodoLimiter, createTodoController);
todoRouter.get("/", authenticateToken, getAllTodoController);
todoRouter.get("/:id", authenticateToken, getTodoByIdController);
todoRouter.put("/:id", authenticateToken, addTodoLimiter, updateTodoByIdController);
todoRouter.delete("/:id", authenticateToken, deleteTodoByIdController);

export default todoRouter;
