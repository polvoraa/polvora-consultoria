import styled from "styled-components";
import Render from "../images/render.png";
import Newsletter from "../components/Newsletter";

const Section = styled.section`
  padding: 80px 24px;
  background-color: #f9fafb;
  color: #111827;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 48px;
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
  return (
    <div>
      <Section id="sobre">
        <Title>Entre em Contato</Title>
        <Container>
          <FormContainer>
            <Form>
              <Label>Nome</Label>
              <Input type="text" placeholder="Seu nome" />
              <Label>E-mail</Label>
              <Input type="email" placeholder="Seu e-mail" />
              <Label>Mensagem</Label>
              <Input type="text" placeholder="Digite sua mensagem" />
              <Button type="submit">Enviar</Button>
            </Form>
          </FormContainer>
          <Image src={Render} alt="Render Logo" />
        </Container>
      </Section>
      <Newsletter />
    </div>
  );
}
