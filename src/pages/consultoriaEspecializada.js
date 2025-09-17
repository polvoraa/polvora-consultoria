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

const frameYtb = styled.img`
    align-items: center;
    justify-items: center;
    display: felx;
`

export default function Projects() {
  return (
    <div>
      <Section id="sobre">
        <Title>Consultoria especializada</Title>
        <Container>
          <Text>
            A consultoria especializada é o suporte técnico que orienta o cliente em todas as etapas do projeto, oferecendo soluções inteligentes para cada desafio. Ela funciona como um guia seguro, ajudando a tomar decisões com base em conhecimento técnico, experiência de mercado e visão estratégica.

            Com esse apoio, é possível identificar a melhor alternativa para cada situação, avaliar custos e benefícios, reduzir riscos e garantir que o investimento seja aplicado da forma mais eficiente. Além disso, a consultoria contribui para evitar erros comuns, trazendo inovação e boas práticas para dentro da obra.

            Na prática, significa ter ao lado uma equipe preparada para transformar dúvidas em respostas, incertezas em planejamento e ideias em resultados concretos.
          </Text>
          <Image src={QuadraK} alt="Render Logo" />
        </Container>
      </Section>
      <Newsletter />
    </div>
  );
}
