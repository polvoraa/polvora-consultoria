const express = require("express");
const ContactMessage = require("../models/ContactMessage");

const router = express.Router();

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post("/contact", async (req, res) => {
  const {
    name = "",
    email = "",
    message = "",
    company = "",
    source = "site",
  } = req.body || {};

  if (company) {
    return res.status(200).json({ message: "Mensagem recebida." });
  }

  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim().toLowerCase();
  const trimmedMessage = String(message).trim();

  if (!trimmedName || trimmedName.length < 2) {
    return res.status(400).json({ error: "Informe um nome valido." });
  }

  if (!isValidEmail(trimmedEmail)) {
    return res.status(400).json({ error: "Informe um e-mail valido." });
  }

  if (!trimmedMessage || trimmedMessage.length < 10) {
    return res
      .status(400)
      .json({ error: "A mensagem precisa ter pelo menos 10 caracteres." });
  }

  try {
    await ContactMessage.create({
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
      source: String(source).trim() || "site",
      metadata: {
        ip: req.ip,
        userAgent: req.get("user-agent"),
        origin: req.get("origin"),
      },
    });

    return res.status(201).json({ message: "Mensagem enviada com sucesso." });
  } catch (error) {
    console.error("Erro ao salvar contato:", error);
    return res.status(500).json({ error: "Erro interno ao enviar mensagem." });
  }
});

module.exports = router;
