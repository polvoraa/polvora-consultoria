import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Page = styled.main`
  min-height: calc(100vh - 180px);
  display: grid;
  place-items: center;
  padding: 48px 24px;
  background: linear-gradient(180deg, #f3f4f6 0%, #e5e7eb 100%);
`;

const Card = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 32px;
  border-radius: 24px;
  background-color: white;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
`;

const Title = styled.h1`
  margin: 0 0 8px;
  color: #0c2d4d;
  font-size: 2rem;
`;

const Text = styled.p`
  margin: 0 0 24px;
  color: #4b5563;
  line-height: 1.5;
`;

const Form = styled.form`
  display: grid;
  gap: 16px;
`;

const Label = styled.label`
  display: grid;
  gap: 8px;
  color: #111827;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #0c2d4d;
    box-shadow: 0 0 0 3px rgba(12, 45, 77, 0.12);
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 12px;
  padding: 14px;
  background-color: #0c2d4d;
  color: white;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }
`;

const ErrorMessage = styled.p`
  margin: 0;
  color: #b91c1c;
`;

const API = process.env.REACT_APP_API_BASE_URL?.replace(/\/$/, "");
const TOKEN_KEY = "polvora_admin_token";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (typeof window !== "undefined" && localStorage.getItem(TOKEN_KEY)) {
    return <Navigate to="/admin" replace />;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!API) {
        setError("API nao configurada.");
        return;
      }

      const response = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(data?.error || "Falha ao autenticar.");
        return;
      }

      localStorage.setItem(TOKEN_KEY, data.token);
      navigate("/admin");
    } catch (requestError) {
      setError("Nao foi possivel conectar com a API.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Page>
      <Card>
        <Title>Login admin</Title>
        <Text>Acesso restrito para visualizar as mensagens recebidas.</Text>

        <Form onSubmit={handleSubmit}>
          <Label>
            E-mail
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Label>

          <Label>
            Senha
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </Label>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </Form>
      </Card>
    </Page>
  );
}
