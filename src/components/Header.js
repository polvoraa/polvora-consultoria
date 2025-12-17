import styled from "styled-components";
import Logo from "../images/logo-header.svg";
import ButtonOrcamento from "../components/Buttonorcamento"
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 40px;

  img {
    height: 100px;
    width: auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;

  a {
    color: #1f2937;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #1f2937;
    }
  }

  @media (max-width: 768px) {
    display: none; /* Esconde o menu no mobile */
  }
`;



export default function Header() {
  const orcamento = () => {
    const numero = "555197481271"; 
    const mensagem = "Olá! Gostaria de solicitar um orçamento.";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank"); // Abre em uma nova aba
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="logo" width={160} />
      </Link>
      <Nav>
        <Link to="/about">Serviços de Consultoria</Link>
        <Link to="/projects">Projetos Executados</Link>
        <Link to="/contact">Contato</Link>
      </Nav>
      <ButtonOrcamento/>
    </HeaderContainer>
  );
}
