import styled from "styled-components";
import RenderLogo from "../images/render.png";

const MainContainer = styled.div`
  padding: 0 40px;
`

const Section = styled.section`
  padding: 48px 24px;
  margin-top: 40px;
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

export default function About() {
  return (
    <MainContainer>
      <Section id="sobre">
        <Title>Sobre a Pólvora</Title>
        <Container>
          <Text>
            Na Pólvora Consultoria, desenvolvemos soluções completas e estratégicas para engenharia civil, com foco no gerenciamento de obras e gestão integrada de empreendimentos. Nosso compromisso é transformar desafios em resultados, unindo planejamento inteligente, tecnologia e experiência de mercado.

            Contamos com uma equipe altamente qualificada, formada por profissionais especializados que atuam com inovação e excelência técnica em todas as etapas do processo. Do planejamento à execução, oferecemos uma gestão eficiente que garante qualidade, prazos cumpridos e otimização de recursos.

            Mais do que entregar projetos, buscamos construir confiança. Cada cliente recebe atenção personalizada, com soluções adaptadas às suas necessidades e um acompanhamento transparente do início ao fim. Para nós, resultado não é apenas um objetivo — é um compromisso.
          </Text>
          <Image src={RenderLogo} alt="Render Logo" />
        </Container>
      </Section>
    </MainContainer>
  );
}
