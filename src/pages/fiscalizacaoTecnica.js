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



export default function Projects() {
  return (
    <div>
      <Section id="sobre">
        <Title>Fiscalização técnica</Title>
        <Container>
          <Text>
            A fiscalização técnica é essencial para garantir que a obra seja executada conforme os projetos, normas e padrões de qualidade estabelecidos. Funciona como os “olhos atentos” do cliente dentro do canteiro, acompanhando cada etapa e verificando se materiais, métodos construtivos e mão de obra estão de acordo com o planejado.

            Com uma fiscalização eficiente, é possível identificar problemas antes que eles se tornem prejuízos, corrigir falhas rapidamente e assegurar que a obra siga dentro dos critérios técnicos exigidos. Além disso, ela protege o investimento do cliente, reduzindo riscos de retrabalhos, atrasos e custos adicionais.

            Na prática, a fiscalização técnica garante tranquilidade: o cliente sabe que sua obra está em boas mãos e que o resultado final será seguro, durável e de qualidade.
          </Text>
          <Image src={QuadraK} alt="Render Logo" />
        </Container>
      </Section>

      <Newsletter />
    </div>
  );
}
