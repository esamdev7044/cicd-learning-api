import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Health-check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "CI/CD learning API is running",
  });
});

export default app;
