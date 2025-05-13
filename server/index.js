import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import multer from "multer";

import connectDB from "./config/dbConnect.js";
import userRoutes from "./routes/user.routes.js";
import activityRoutes from "./routes/activity.routes.js";
import goalRoutes from "./routes/goal.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const upload = multer();

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(upload.none()); //  handle form-data requests

app.get("/api", (req, res) => {
  res.send({ message: "hello world!" });
});

// Routes
app.use("/api/", userRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/goals", goalRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port: http://localhost:${PORT}`);
});
