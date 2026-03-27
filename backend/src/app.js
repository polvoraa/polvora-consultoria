const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

const allowedOrigins = (process.env.FRONTEND_URL || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.set("trust proxy", true);
app.use(express.json());

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origem nao permitida pelo CORS."));
    },
  })
);

app.get("/api/health", (req, res) => {
  return res.status(200).json({ status: "ok" });
});

app.use("/api", contactRoutes);

app.use((err, req, res, next) => {
  if (err.message === "Origem nao permitida pelo CORS.") {
    return res.status(403).json({ error: err.message });
  }

  return next(err);
});

module.exports = app;
