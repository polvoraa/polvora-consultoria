import styled from "styled-components";
import Carousel from "./Carousel";
import Carouselscroll from "./Carouselscroll"

const HeroSection = styled.section`
  text-align: center;
  padding: 64px 24px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 32px;
  color: #4b5563;
`;

export default function Hero() {
  return (
    <HeroSection>
      <Title>Consultoria Especializada em Engenharia</Title>
      <Description>
        Soluções personalizadas, inovação e eficiência para seu projeto de infraestrutura,
        edificações ou gestão de obras.
      </Description>
      <Carouselscroll />
    </HeroSection>
  );
}
