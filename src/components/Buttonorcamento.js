import styled from "styled-components";

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

export default function ButtonOrcamento() {
    const orcamento = () => {
        const numero = "555197481271";
        const mensagem = "Olá! Gostaria de solicitar um orçamento.";
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank"); // Abre em uma nova aba
    };

    return (
        <Button onClick={orcamento}>Solicitar Orçamento via Whatsapp</Button>
    );
}
