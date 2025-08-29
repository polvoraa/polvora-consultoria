import styled from "styled-components";
import Logo from "../images/logo2.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  img{
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
      color: #2563eb;
    }
  }
`;

const Button = styled.button`
  background-color: #0c2d4d;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: #0a243d;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo" width={160} />
      <Nav>
        <a href="#servicos">Serviços</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </Nav>
      <Button>Solicitar Consultoria</Button>
    </HeaderContainer>
  );
}
