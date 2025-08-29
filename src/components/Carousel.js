import styled, { keyframes } from "styled-components";
import Bosque1 from "../images/bosque1.jpg";
import Bosque2 from "../images/bosque2.jpg";
import Quadrak from "../images/quadrak.jpg";
import Solos from "../images/solos.jpg";
import One from "../images/one.PNG";
import Eudoro from "../images/Eudoro.jpg";
import Escritorio from "../images/Escritorio.PNG";
import Ibis from "../images/Ibis.jpg";

const images = [
  Bosque1,
  Bosque2,
  Quadrak,
  Solos,
  One,
  Eudoro,
  Escritorio,
  Ibis,
];

// 🔹 1. Criamos uma animação contínua de esquerda pra direita
const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-top: 40px;
`;

// 🔹 2. Wrapper duplicado para looping perfeito
const ImagesWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: calc(300px * ${images.length * 2});
  animation: ${scrollX} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Image = styled.img`
  min-width: 300px;
  height: 192px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.25);
  }
`;

export default function Carousel() {
  return (
    <CarouselContainer>
      <ImagesWrapper>
        {/* Duplicamos as imagens para looping perfeito */}
        {[...images, ...images].map((img, i) => (
          <Image key={i} src={img} alt={`carousel-${i}`} />
        ))}
      </ImagesWrapper>
    </CarouselContainer>
  );
}
