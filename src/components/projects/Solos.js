import styled from "styled-components";
import Bosque3 from "../../images/letreiroBosque.jpg";
import Solos1 from "../../images/solos.jpg";
import Solos2 from "../../images/solos2.jpg";
import Solos3 from "../../images/solos3.jpg";

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
                <Title>Solos - Torres/RS</Title>
                <Container>
                    <Text>
                        Um empreendimento exclusivo que poderia
                        estar em qualquer lugar do mundo, mas escolheu
                        a melhor localização de Torres. São 10 casas
                        suspensas, com terraço panorâmico e vista
                        permanente para o mar. <br />
                        As áreas internas integradas às externas e a vista
                        permanente para o mar fazem do solos mais que
                        um projeto contemporâneo e cosmopolita.
                        É um organismo vivo e integrado com o meio
                        a sua volta. <br />
                        • Casas c/ 4 suítes, de 343m² a 515m² <br/>
                        • 4 vagas de garagem <br/>
                        • Depósito, lavabo, lareira, churrasqueira <br/>
                        • Terraços integrados à área social c/ vista panorâmica permanente <br/>
                        • Área social c/ estar, jantar, cozinha e copa integrados <br/>
                        • WC e pátio de serviço <br/>
                        • 2 acessos de garagem e 1 de pedestre <br/>
                        • Circulação c/ jardins internos e luz natural <br/>
                        • 2 elevadores e sistema CFTV e interfonia <br/>
                    </Text>
                    <Image src={Solos1} alt="Solos" />
                </Container>
                <VideoContainer>
                    <ImageWrapper>
                        <img src={Solos2} alt="Solos 3" />
                    </ImageWrapper>

                    <ImageWrapper>
                        <img src={Solos3} alt="Solos 3" />
                    </ImageWrapper>
                </VideoContainer>
            </Section>
        </div>
    );
}
