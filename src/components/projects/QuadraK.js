import styled from "styled-components";
import QuadraK from "../../images/quadrak.jpg";
import QuadraK1 from "../../images/quadrak1.jpg";

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

const VideoWrapper = styled(MediaWrapper)`
  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
    border: none;
    display: block;
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
        <Title>Quadra K</Title>
        <Container>
          <Text>
            Em frente ao Parque Germânia, próximo a restaurantes, cafés, livrarias, galerias, universidades e shopping. Apartamento mobiliado e equipado, com a melhor vista do Jardim Europa. É só entrar. Confira a seguir o tour virtual e o vídeo do decorado.<br />
            Reunindo os melhores materiais e acabamentos do mercado, o Quadra K possui como características principais:<br />
            • Fachada metálica e impermeabilizada, garantindo conforto térmico;<br />
            • Manta acústica entre pavimentos;<br />
            • Revestimento especial nas tubulações para evitar desconforto acústico.<br />
            O elo perfeito entre um estilo de vida contemporâneo e todas as suas possibilidades. Localização privilegiada em frente ao parque Germânia, junto a restaurantes, cafés, livrarias, galerias e shopping. Um empreendimento com arquitetura e design que estimulam o convívio e preservam a privacidade.
          </Text>
          <Image src={QuadraK} alt="Quadra K" />
        </Container>
        <VideoContainer>
          <ImageWrapper>
            <img src={QuadraK1} alt="Quadra K" />
          </ImageWrapper>

          <VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/vb-SnPliaYg"
              title="Quadra K - Detalhes do Empreendimento"
              frameBorder="0"
              allowFullScreen
            />
          </VideoWrapper>
        </VideoContainer>
      </Section>
    </div>
  );
}
