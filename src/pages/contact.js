import { useState } from "react";
import styled from "styled-components";
import Render from "../images/render.png";
import Newsletter from "../components/Newsletter";

const Section = styled.section`
  padding: 80px 24px;
  background-color: #f9fafb;
  color: #111827;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f9fafb;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  padding: 40px;
  border-radius: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: #1f2937;
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 430px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #ffffff;
`;

const Intro = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #d1d5db;
`;

const Label = styled.label`
  font-size: 0.95rem;
  color: #d1d5db;
`;

const Input = styled.input`
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  width: 100%;
  background-color: #f3f4f6;
  color: #111827;
  outline: none;
  transition: 0.3s;
  margin-top: 8px;

  &:focus {
    background-color: #fff;
    box-shadow: 0 0 0 2px #0c2d4d;
  }
`;

const Textarea = styled.textarea`
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  width: 100%;
  min-height: 120px;
  resize: vertical;
  background-color: #f3f4f6;
  color: #111827;
  outline: none;
  transition: 0.3s;
  margin-top: 8px;

  &:focus {
    background-color: #fff;
    box-shadow: 0 0 0 2px #0c2d4d;
  }
`;

const Button = styled.button`
  background-color: white;
  color: #0c2d4d;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 8px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #cecece;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const Status = styled.p`
  font-size: 0.95rem;
  margin-top: 6px;
  color: #d1d5db;
`;

const StatusOk = styled(Status)`
  color: #a7f3d0;
`;

const StatusErr = styled(Status)`
  color: #fecaca;
`;

const Image = styled.img`
  flex: 1;
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

export default function Projects() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  const API = process.env.REACT_APP_API_BASE_URL?.replace(/\/$/, "");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setOk(false);
    setError("");

    try {
      if (!API) {
        setError("API não configurada (REACT_APP_API_BASE_URL).");
        return;
      }

      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          company,
          source: "site",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data?.error || "Erro ao enviar.");
        return;
      }

      setOk(true);
      setName("");
      setEmail("");
      setMessage("");
      setCompany("");
    } catch {
      setError("Falha de rede/servidor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Section id="sobre">
        <Container>
          <FormContainer>
            <Form id="contact-form" onSubmit={handleSubmit}>
              <Title>Entre em contato</Title>
              <Intro>
                Conte um pouco sobre seu projeto para receber um retorno com
                mais contexto e direcionamento.
              </Intro>

              <Label>
                Nome
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Label>

              <Label>
                E-mail
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Label>

              <Label>
                Mensagem
                <Textarea
                  placeholder="Digite sua mensagem"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Label>

              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <Button type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </Button>

              {ok && <StatusOk>Mensagem enviada ✅</StatusOk>}
              {error && <StatusErr>Erro: {error}</StatusErr>}
            </Form>
          </FormContainer>

          <Image src={Render} alt="Render Logo" />
        </Container>
      </Section>

      <Newsletter />
    </div>
  );
}
