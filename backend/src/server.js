require("dotenv").config();

const app = require("./app");
const { connectToDatabase } = require("./config/database");

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`API online na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Falha ao iniciar a API:", error);
    process.exit(1);
  }
}

startServer();
