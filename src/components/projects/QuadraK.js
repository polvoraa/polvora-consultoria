import styled from "styled-components";
import QuadraK from "../../images/quadrak.jpg";

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
                    <Image src={QuadraK} alt="Render Logo" />
                </Container>
            </Section>
            <VideoContainer>
              <VideoWrapper>
                <iframe src="https://www.youtube.com/embed/hTcQ41i1rqU" 
                title="Quadra K - Mobiliado e do Seu Jeito" 
                frameborder="0" 
                allowfullscreen>
                </iframe>
              </VideoWrapper>
            </VideoContainer>
            <VideoContainer>
              <VideoWrapper>
                <iframe src="https://www.youtube.com/embed/vb-SnPliaYg" title="#IVORIZZOEXPLICA Quadra K - Detalhes do Empreendimento" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </VideoWrapper>
            </VideoContainer>
        </div>
    );
}
