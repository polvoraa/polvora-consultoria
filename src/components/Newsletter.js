import styled from "styled-components";

const Section = styled.section`
  background-color: #1f2937;
  color: white;
  text-align: center;
  padding: 48px 24px;
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

  &:hover {
    background-color: #0a243d;
  }
`;

export default function Newsletter() {
  return (
    <Section>
      <Title>Receba nossas novidades e insights em seu e-mail</Title>
      <Form>
        <Input type="email" placeholder="Seu e-mail" />
        <Button>Assinar</Button>
      </Form>
    </Section>
  );
}
