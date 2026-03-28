const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { requireAuth } = require("../middleware/authMiddleware");

const router = express.Router();

function getAdminConfig() {
  const adminEmail = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const adminPasswordHash = (process.env.ADMIN_PASSWORD_HASH || "").trim();
  const jwtSecret = (process.env.JWT_SECRET || "").trim();

  if (!adminEmail || !adminPasswordHash || !jwtSecret) {
    return null;
  }

  return { adminEmail, adminPasswordHash, jwtSecret };
}

router.post("/login", async (req, res) => {
  const config = getAdminConfig();

  if (!config) {
    return res.status(500).json({ error: "Autenticacao nao configurada." });
  }

  const email = String(req.body?.email || "").trim().toLowerCase();
  const password = String(req.body?.password || "");

  if (!email || !password) {
    return res.status(400).json({ error: "Informe e-mail e senha." });
  }

  const isValidEmail = email === config.adminEmail;
  const isValidPassword = await bcrypt.compare(password, config.adminPasswordHash);

  if (!isValidEmail || !isValidPassword) {
    return res.status(401).json({ error: "Credenciais invalidas." });
  }

  const token = jwt.sign(
    {
      sub: config.adminEmail,
      role: "admin",
    },
    config.jwtSecret,
    { expiresIn: "12h" }
  );

  return res.status(200).json({
    token,
    user: {
      email: config.adminEmail,
      role: "admin",
    },
  });
});

router.get("/me", requireAuth, (req, res) => {
  return res.status(200).json({
    user: {
      email: req.user.sub,
      role: req.user.role,
    },
  });
});

module.exports = router;
