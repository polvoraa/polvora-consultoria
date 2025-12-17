import styled from "styled-components";
import RenderLogo from "../images/render-logo.png";
import Newsletter from "../components/Newsletter";
import iconServices from "../images/icons/iconservices.png";
import iconDiagnostic from "../images/icons/icondiagnostic.png";
import iconAfericao from "../images/icons/iconafericao.png";
import iconPrumo from "../images/icons/iconprumo.png";
import iconCoins from "../images/icons/iconcoins.png";
import iconPasta from "../images/icons/iconpasta.png";






/* ====== LAYOUT GERAL ====== */
const Section = styled.section`
  padding: 48px 24px;
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

/* ====== CONTEÚDO ====== */
const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: ${(p) => (p.$reverse ? "row-reverse" : "row")};
    align-items: center;
    gap: 32px;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Text = styled.p`
  color: #374151;
  font-size: 1rem;
  line-height: 1.6;
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    max-width: 350px;
    max-height: 300px;
    object-fit: contain;
    border-radius: 15px;
  }

  @media (min-width: 768px) {
    img {
      max-width: 420px;
      max-height: 350px;
    }
  }
`;

/* ====== COMPONENTE ====== */
export default function About() {
  return (
    <div>
      {/* SECTION 1 */}
      <Section id="sobre">
        <PageContainer>
          <Container>
            <TextBlock>
              <Title>Serviços</Title>
              <Text>
                Na Pólvora, a gente leva cada projeto a sério.
                Buscamos sempre entregar o máximo em qualidade, segurança e responsabilidade técnica...
                <br /><br />
                Abaixo, você confere um resumo de cada serviço e como podemos te ajudar.
              </Text>
            </TextBlock>

            <ImageWrapper>
              <img src={iconServices} alt="Serviços" />
            </ImageWrapper>
          </Container>
        </PageContainer>
      </Section>

      {/* SECTION 2 */}
      <Section id="diagnostico-obras">
        <PageContainer>
          <Container $reverse>
            <TextBlock>
              <Title>Diagnóstico de obras em andamento:</Title>
              <Text>
                Análise comportamental;<br />
                Análise do sequenciamento da obra;<br />
                Produtividade e prazos;<br />
                Custos e reorçamentação;
              </Text>
            </TextBlock>

            <ImageWrapper>
              <img src={iconDiagnostic} alt="Diagnóstico de obras" />
            </ImageWrapper>
          </Container>
        </PageContainer>
      </Section>

      {/* SECTION 3 */}
      <Section>
        <PageContainer>
          <Container>
            <TextBlock>
              <Title>Aferição da tendência:</Title>
              <Text>
                Tendência atual de prazo;<br />
                Tendência atual da qualidade;<br />
                Tendência atual dos custos;
              </Text>
            </TextBlock>

            <ImageWrapper>
              <img src={iconAfericao} alt="Aferição da tendência" />
            </ImageWrapper>
          </Container>
        </PageContainer>
      </Section>

      {/* SECTION 4 */}
      <Section>
        <PageContainer>
          <Container $reverse>
            <TextBlock>
              <Title>Realinhamento Prático:</Title>
              <Text>
                Novo cronograma;<br />
                Nova formatação de times;<br />
                Nova metodologia de acompanhamento;<br />
                Gestão da qualidade;
              </Text>
            </TextBlock>

            <ImageWrapper>
              <img src={iconPrumo} alt="Realinhamento" />
            </ImageWrapper>
          </Container>
        </PageContainer>
      </Section>

      {/* SECTION 5 */}
      <Section>
        <PageContainer>
          <Container>
            <TextBlock>
              <Title>Vantagens da consultoria:</Title>
              <Text>
                Não interrompe o andamento atual da obra;<br />
                Possibilidade de economia de milhões;<br />
                Melhora da imagem da empresa;<br />
                Utilize a consultoria em seus empreendimentos mais críticos.
              </Text>
            </TextBlock>

            <ImageWrapper>
              <img src={iconCoins} alt="Vantagens da consultoria" />
            </ImageWrapper>
          </Container>
        </PageContainer>
      </Section>

      {/* SECTION 6 */}
      <Section>
        <PageContainer>
          <Container $reverse>
            <TextBlock>
              <Title>Pacotes de documentos de Gerenciamento:</Title>
              <Text>
                Cronograma de suprimentos;<br />
                Cronograma de longo, médio e curto prazo;<br />
                Remoção de restrições;<br />
                Qualidade;<br />
                FVS;<br />
                Mapas de concretagem;<br />
                Ensaios tecnológicos;<br />
                Qualidade light;
              </Text>
            </TextBlock>

            <ImageWrapper>
              <img src={iconPasta} alt="Pacotes de documentos" />
            </ImageWrapper>
          </Container>
        </PageContainer>
      </Section>

      {/* SECTION 7 */}
      <Section>
        <PageContainer>
          <Container>
            <TextBlock>
              <Title>Considerações:</Title>
              <Text>
                Nosso trabalho é executado com tranquilidade, possibilitando que o status inicial não mude,
                proporcionando um diagnóstico real da situação, sem constrangimento para a equipe que está conduzindo a obra.
              </Text>
            </TextBlock>

            <ImageWrapper>
              <img src={RenderLogo} alt="Considerações" />
            </ImageWrapper>
          </Container>
        </PageContainer>
      </Section>

      <Newsletter />
    </div>
  );
}
