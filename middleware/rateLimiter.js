import rateLimit from "express-rate-limit";

const addTodoLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message:
    "Too many to-do items added. Please wait 3 minutes before trying again.",
  standardHeaders: true,
  legacyHeaders: false,
});

export default addTodoLimiter;
