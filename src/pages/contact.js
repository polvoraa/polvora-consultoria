import { useState } from "react";
import styled from "styled-components";
import Render from "../images/render.png";
import Newsletter from "../components/Newsletter";
import ButtonOrcamento from "../components/Buttonorcamento";

const Section = styled.section`
  padding: 80px 24px;
  background-color: #f9fafb;
  color: #111827;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  text-align: left;
  margin-top: 14px;
  margin-bottom: 14px;
  color: #0c2d4d;
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
  padding: 40px 40px;
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
  max-width: 400px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
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

  &:focus {
    background-color: #fff;
    box-shadow: 0 0 0 2px #0c2d4d;
  }
`;

const Textarea = styled.textarea`
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  width: 100%;
  min-height: 120px;
  resize: vertical;
  background-color: #f3f4f6;
  color: #111827;
  outline: none;
  transition: 0.3s;

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
    background-color: #cececeff;
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

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
  margin-bottom: 10px;
  color: #0c2d4d;
`;

const TextContainer = styled.div``;

const ButtonContainer = styled.div`
  margin-top: 48px;
`;

export default function Projects() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Honeypot anti-spam: campo invisível (bots costumam preencher)
  const [company, setCompany] = useState("");

  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setOk(false);
    setError("");

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
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
        <Title>Entre em Contato</Title>

        <Container>
          {/* FORMULÁRIO */}
          <FormContainer>
            <Form onSubmit={handleSubmit}>
              <Label>Nome</Label>
              <Input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <Label>E-mail</Label>
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Label>Mensagem</Label>
              <Textarea
                placeholder="Digite sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              {/* honeypot invisível */}
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
