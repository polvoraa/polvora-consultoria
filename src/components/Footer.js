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
      <div></div>
      <SocialLinks>
        <a href="https://www.instagram.com/fabianopolvora">Instagram</a>
        <a href="https://www.linkedin.com/in/fabiano-polvora-5686719?originalSubdomain=br">LinkedIn</a>
        <a href="https://wa.me/555197481271">Whatsapp</a>
      </SocialLinks>
    </FooterContainer>
  );
}
