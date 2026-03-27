import styled from "styled-components";

const Section = styled.section`
  background-color: #1f2937;
  color: white;
  text-align: center;
  padding: 48px 24px;
  margin-top: 40px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

export default function Newsletter() {
  return (
    <Section>
      <Title>
        Solicite um orçamento e vamos levar seu projeto de engenharia civil ao
        próximo nível.
      </Title>
    </Section>
  );
}
