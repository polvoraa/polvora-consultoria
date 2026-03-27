const mongoose = require("mongoose");

async function connectToDatabase() {
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI nao foi configurada.");
  }

  mongoose.set("strictQuery", true);

  await mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
  });
}

module.exports = { connectToDatabase };
