import styled from "styled-components";
import Bosque3 from "../../images/letreiroBosque.jpg";
import Bosque2 from "../../images/bosque2.jpg";
import Bosque1 from "../../images/bosque1.jpg";

const Section = styled.section`
  padding: 48px 24px;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 16px;
  margin-left: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;

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
  height: 350px;
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

const MediaWrapper = styled.div`
  flex: 1;
  max-width: 600px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const ImageWrapper = styled(MediaWrapper)`
  img {
    width: 100%;
    aspect-ratio: 16 / 9; /* força mesma proporção do vídeo */
    height: auto;
    object-fit: cover;
    display: block;
  }
`;


export default function Projects() {
  return (
    <div>
      <Section id="sobre">
        <Title>Ricaldone 2233 - Porto Alegre/RS</Title>
        <Container>
          <Text>
            Se a vida na cidade passa rápido, no condomínio<br />
            O Bosque você vive todos os dias intensamente.<br />
            São 35 hectares com uma reserva particular do patrimônio natural, localizados a 3 minutos do centro de Gramado. Um refúgio de mata nativa com toda infra-estrutura e segurança.<br />
            São 2 modelos de casas, completamente  integrados com a natureza, atendendo o seu estilo. Todos os lotes com área privativa superior a 1000m².<br />
            <br />
            O Bosque está localizado a 2,5Km da Rua Coberta, há 5 minutos de restaurantes, casas de fondue, boutiques, salões de beleza, cinemas, galerias e Centro de eventos.<br />
            A localização do condomínio O Bosque permite que você desfrute do melhor de Gramado sem perder o descanso e a privacidade.<br />
          </Text>
          <Image src={Bosque1} alt="Bosque 1" />
        </Container>
        <VideoContainer>
          <ImageWrapper>
            <img src={Bosque2} alt="Bosque 2" />
          </ImageWrapper>

          <ImageWrapper>
      <img src={Bosque3} alt="Bosque 3" />
          </ImageWrapper>
        </VideoContainer>
      </Section>
    </div>
  );
}
