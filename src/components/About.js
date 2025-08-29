import styled from "styled-components";
import RenderLogo from "../images/render-logo.png";

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
  height: 192px;
  object-fit: cover;
  border-radius: 8px;
`;

export default function About() {
  return (
    <Section id="sobre">
      <Title>Sobre a Pólvora</Title>
      <Container>
        <Text>
          A Pólvora Consultoria é especializada em soluções estratégicas para engenharia
          civil, com foco em gerenciamento de obras, projetos de infraestrutura e gestão
          completa de empreendimentos. Nosso time alia experiência técnica, inovação e
          compromisso com resultados.
        </Text>
        <Image src={RenderLogo} alt="Render Logo" />
      </Container>
    </Section>
  );
}
