import styled from "styled-components";
import QuadraK from "../images/render.png";
import Newsletter from "../components/Newsletter";
import { div } from "framer-motion/client";

const Section = styled.section`
  padding: 48px 24px;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Text = styled.div`
  flex: 1;
  color: #374151;
  font-size: 1rem;
  line-height: 1.6;
`;

const Image = styled.img`
  flex: 1;
  min-width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;
const Button = styled.button`

`



export default function Projects() {
  return (
    <div>
      <Section id="sobre">
        <Title>Contato</Title>
        <Container>
          <Text>
            Tem um projeto em mente ou precisa de orientação especializada? Nossa equipe de consultoria em engenharia civil está pronta para ajudar. Fale conosco pelos canais abaixo e retornaremos o mais rápido possível.
          </Text>
                  <Button>Contato</Button>
          <Image src={QuadraK} alt="Render Logo" />
        </Container>
      </Section>
      <Newsletter />
    </div>
  );
}
