import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  text-align: center;
  padding: 32px 24px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;

  a {
    color: white;
    transition: color 0.3s;

    &:hover {
      color: #2563eb;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer id="contato">
      <div>© 2025 Pólvora Consultoria. Todos os direitos reservados.</div>
      <SocialLinks>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">Whatsapp</a>
      </SocialLinks>
    </FooterContainer>
  );
}
