import styled from "styled-components";
import QuadraK from "../../images/letreiroBosque.jpg";

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

const VideoContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const VideoWrapper = styled.div`
  width: 50%; /* ocupa metade da largura */
  max-width: 600px;
  aspect-ratio: 16/9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  /* responsivo */
  @media (max-width: 900px) {
    width: 100%; /* em telas menores, ocupa largura total */
  }
`;

export default function Projects() {
    return (
        <div>
            <Section id="sobre">
                <Title>Casas do bosque - Gramado/RS</Title>
                <Container>
                    <Text>
                        Se a vida na cidade passa rápido, no condomínio<br/>
                        O Bosque você vive todos os dias intensamente.<br/>
                        São 35 hectares com uma reserva particular do patrimônio natural, localizados a 3 minutos do centro de Gramado. Um refúgio de mata nativa com toda infra-estrutura e segurança.<br/>
                        São 2 modelos de casas, completamente  integrados com a natureza, atendendo o seu estilo. Todos os lotes com área privativa superior a 1000m².<br/>
<br/>
                        O Bosque está localizado a 2,5Km da Rua Coberta, há 5 minutos de restaurantes, casas de fondue, boutiques, salões de beleza, cinemas, galerias e Centro de eventos.<br/>
                        A localização do condomínio O Bosque permite que você desfrute do melhor de Gramado sem perder o descanso e a privacidade.<br/>
                    </Text>
                    <Image src={QuadraK} alt="Render Logo" />
                </Container>
            </Section>
            <VideoContainer>
                <VideoWrapper>
                    <iframe width="1040" height="585"
                        src="https://www.youtube.com/embed/edAbKtZ29v4"
                        title="CASAS DO BOSQUE - GRAMADO/RS - IVO RIZZO"
                        allowfullscreen
                    ></iframe>
                </VideoWrapper>
            </VideoContainer>
        </div>
    );
}
