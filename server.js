import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";
import indexRouter from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:2395",
      "http://localhost:8275",
      "http://localhost:6290",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);

connectDB();

app.use(`/api`, indexRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// 675d4c82f6a2a26a8ee4a5a8
// 675d4cfe7002fa0d1e905e27