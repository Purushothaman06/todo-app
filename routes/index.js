import express from "express";
import authRouter from "./authRouter.js";
import todoRouter from "./todoRouter.js";

const indexRouter = express.Router();

indexRouter.use("/auth", authRouter);
indexRouter.use("/todos", todoRouter);

export default indexRouter;
