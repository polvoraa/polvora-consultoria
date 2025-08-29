import styled from "styled-components";
import Quadrak from "../images/quadrak.jpg";
import Bosque1 from "../images/bosque1.jpg";
import Bosque2 from "../images/bosque2.jpg";
import Solos from "../images/solos.jpg";

const Section = styled.section`
  padding: 48px 24px;
  background-color: #f9fafb;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainCase = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 210px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 8px;

  ${MainCase}:hover & {
    opacity: 1;
  }
`;

const ListCases = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SmallCase = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 64px;
    object-fit: cover;
  }
`;

const SmallOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 8px;

    ${SmallCase}:hover & {
    opacity: 1;
  }
`;

export default function SuccessCases() {
  return (
    <Section>
      <Title>Casos de Sucesso</Title>
      <Grid>
        <MainCase>
          <img src={Quadrak} alt="Quadra K" />
          <Overlay>Quadra K</Overlay>
        </MainCase>

        <ListCases>
          <SmallCase>
            <img src={Bosque1} alt="Bosque 1" />
            <SmallOverlay>Bosque 1</SmallOverlay>
          </SmallCase>
          <SmallCase>
            <img src={Bosque2} alt="Bosque 2" />
            <SmallOverlay>Bosque 2</SmallOverlay>
          </SmallCase>
          <SmallCase>
            <img src={Solos} alt="Solos" />
            <SmallOverlay>Solos</SmallOverlay>
          </SmallCase>
        </ListCases>
      </Grid>
    </Section>
  );
}
