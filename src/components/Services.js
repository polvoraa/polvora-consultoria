import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0 40px;
`

const Section = styled.section`
  padding: 48px 24px;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
`;

const Card = styled.div`
  background-color: #f3f4f6;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover{
    scale: 1.05;
    transition: 1.5s;
  }

`;

export default function Services() {
  return (
    <Container>
      <Section id="servicos">
        <Title>Serviços</Title>
        <Grid>
          <Link to="/gerenciamentoObras">
            <Card>Gerenciamento de Obras</Card>
          </Link>
          <Link to="/fiscalizacaoTecnica">
            <Card>Fiscalização técnica</Card>
          </Link>
          <Link to="/planejamentoEcontrole">
            <Card>Planejamento e controle</Card>
          </Link>
          <Link to="/consultoriaEspecializada">
            <Card>Consultoria especializada</Card>
          </Link>
        </Grid>
      </Section>
    </Container>
  );
}
