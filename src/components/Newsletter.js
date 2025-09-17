import styled from "styled-components";
import { useState } from "react";
import emailjs from "emailjs-com";

const Section = styled.section`
  background-color: #1f2937;
  color: white;
  text-align: center;
  padding: 48px 24px;
  margin-top: 40px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  width: 250px;
  font-size: 1rem;
  color: black;
`;

const Button = styled.button`
  background-color: #0c2d4d;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #0a243d;
  }
`;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("Por favor, insira um e-mail válido!");
      return;
    } 

    try {
      const result = await emailjs.send(
        "service_wmyg0qp", // Substituir pelo ID do serviço do EmailJS
        "template_901r6vo", // Substituir pelo ID do template
        {
          email: email,
        },
        "SEU_PUBLIC_KEY" // Substituir pelo Public Key do EmailJS
      );

      if (result.status === 200) {
        setStatus("E-mail enviado com sucesso!");
        setEmail("");
      } else {
        setStatus("Erro ao enviar o e-mail. Tente novamente!");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus("Erro ao enviar o e-mail. Tente novamente!");
    }
  };

  return (
    <Section>
      <Title>Receba nossas novidades e insights em seu e-mail</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Assinar</Button>
      </Form>
      {status && <p style={{ marginTop: "12px" }}>{status}</p>}
    </Section>
  );
}
