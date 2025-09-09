import styled from "styled-components";
import Logo from "../images/logo-header.svg";

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

const Button = styled.button`
  background-color: #0c2d4d;
  color: white;
  padding: 16px 32px;
  border-radius: 6px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #0a243d;
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
      <img src={Logo} alt="logo" width={160} />
      <Nav>
        <a href="#servicos">Serviços</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </Nav>
      <Button onClick={orcamento}>Solicitar Orçamento</Button>
    </HeaderContainer>
  );
}
