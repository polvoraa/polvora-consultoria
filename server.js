import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Conexão com o MongoDB Atlas
mongoose.connect("mongodb+srv://spolvoramatheus_db_user:<db_password>@cluster0.iwo4s7x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.log("❌ Erro ao conectar:", err));

// Modelo do e-mail
const EmailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
});
const Email = mongoose.model("Email", EmailSchema);

// Rota para salvar o e-mail
app.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "E-mail obrigatório" });
    }

    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "E-mail já cadastrado" });
    }

    await Email.create({ email });
    return res.status(201).json({ message: "E-mail cadastrado com sucesso!" });
  } catch (err) {
    return res.status(500).json({ message: "Erro no servidor" });
  }
});

// Inicia o servidor
app.listen(5000, () => {
  console.log("🚀 Servidor rodando na porta 5000");
});
