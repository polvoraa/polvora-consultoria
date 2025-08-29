import styled from "styled-components";

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

`;

export default function Services() {
  return (
    <Section id="servicos">
      <Title>Serviços</Title>
      <Grid>
        <Card>Gerenciamento de Obras</Card>
        <Card>Fiscalização técnica</Card>
        <Card>Planejamento e controle</Card>
        <Card>Consultoria especializada</Card>
      </Grid>
    </Section>
  );
}
