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
                <Title>Gerenciamento de obras</Title>
                <Container>
                    <Text>
                        O gerenciamento de obras é o coração de qualquer projeto bem-sucedido na engenharia civil. Ele envolve o planejamento, coordenação e controle de todas as etapas da construção – desde o cronograma até o orçamento, passando pelo acompanhamento da execução.

Ao contar com um gerenciamento especializado, a empresa garante que prazos sejam cumpridos, custos fiquem dentro do previsto e a qualidade do resultado final seja mantida em cada detalhe. Isso significa menos imprevistos, mais segurança para o cliente e uma obra que realmente entrega o que foi planejado.

Em outras palavras: nós transformamos complexidade em organização, evitando desperdícios de tempo e dinheiro e assegurando que cada etapa avance com eficiência.
                    </Text>
                    <Image src={QuadraK} alt="Render Logo" />
                </Container>
            </Section>
            <Newsletter />
        </div>
    );
}
