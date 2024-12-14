import express from "express";
import signUpController from "../controllers/auth/signUpController.js";
import signInController from "../controllers/auth/signInController.js";
import refreshController from "../controllers/auth/refreshController.js";

const authRouter = express.Router();

authRouter.post("/sign-up", signUpController);
authRouter.post("/sign-in", signInController);
authRouter.post("/refresh", refreshController);

export default authRouter;
