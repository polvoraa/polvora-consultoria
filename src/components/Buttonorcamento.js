import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #0c2d4d;
  color: white;
  padding: 16px 32px;
  border-radius: 6px;
  font-weight: bold;
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: #0a243d;
  }
`;

export default function ButtonOrcamento() {
  return <ButtonLink to="/contact#contact-form">Solicitar orçamento</ButtonLink>;
}
