import styled from "styled-components";
import bgHero from "../images/Ibis.jpg";

const HeroSection = styled.section`
  text-align: center;
`;

const HeroImage = styled.div`
  position: relative; /* importante pro ::before funcionar */
  background-image: url(${bgHero});
  background-size: cover;
  background-position: center;
  padding: 80px 24px;
  color: white;
  overflow: hidden;

  /* camada azul semi-transparente */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(31, 41, 55, 0.8); /* azul com opacidade 0.3 */
    z-index: 1; /* fica atrás do texto */
  }
`;

const Title = styled.h1`
  position: relative; /* necessário pra ficar na frente da camada */
  z-index: 2;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Description = styled.p`
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin: 0 auto;
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroImage>
        <Title>Consultoria Especializada em Engenharia</Title>
        <Description>
          Soluções personalizadas para gestão de suas obras com foco em segurança, qualidade, custo e prazo.
          Análise de viabilidade de empreendimentos e coordenação de projetos.
        </Description>
      </HeroImage>
    </HeroSection>
  );
}