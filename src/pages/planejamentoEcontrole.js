import styled from "styled-components";
import QuadraK from "../images/render.png";
import Newsletter from "../components/Newsletter";
import Dashborads from "../images/PlanejamentoEControle/dashboards.jpeg"
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


export default function Projects() {
    return (
        <div>
            <Section id="sobre">
                <Title>Gestão à vista</Title>
                <Container>
                    <Text>
                      O planejamento e controle de obras é o que transforma um projeto em realidade de forma organizada e previsível. É nessa etapa que definimos cronogramas, custos, recursos e estratégias, garantindo que tudo aconteça no tempo certo e dentro do orçamento previsto.

O controle, por sua vez, acompanha a execução em tempo real, ajustando rotas sempre que necessário para evitar atrasos, desperdícios ou estouros financeiros. Essa combinação de planejamento sólido com monitoramento constante dá segurança ao cliente e transparência em cada decisão.

O resultado? Uma obra que avança de forma eficiente, com menos imprevistos, mais economia e a certeza de que o investimento está sendo bem administrado.
                    </Text>
                    <Image src={Dashborads} alt="Render Logo" />
                </Container>
            </Section>
            <Newsletter />
        </div>
    );
}
