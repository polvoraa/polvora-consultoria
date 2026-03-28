import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Page = styled.main`
  min-height: calc(100vh - 180px);
  padding: 48px 24px;
  background-color: #f9fafb;
`;

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  margin: 0;
  color: #0c2d4d;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button`
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  background-color: ${(props) => (props.$secondary ? "#e5e7eb" : "#0c2d4d")};
  color: ${(props) => (props.$secondary ? "#111827" : "white")};
  font-weight: 700;
  cursor: pointer;
`;

const Grid = styled.div`
  display: grid;
  gap: 16px;
`;

const Card = styled.article`
  padding: 20px;
  border-radius: 18px;
  background-color: white;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
`;

const Meta = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 12px;
  color: #4b5563;
  font-size: 0.95rem;
`;

const Message = styled.p`
  margin: 0;
  color: #111827;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const Status = styled.p`
  color: #4b5563;
`;

const API = process.env.REACT_APP_API_BASE_URL?.replace(/\/$/, "");
const TOKEN_KEY = "polvora_admin_token";

export default function Admin() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token =
    typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;

  useEffect(() => {
    async function loadMessages() {
      if (!token || !API) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API}/api/admin/messages`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json().catch(() => ({}));

        if (response.status === 401) {
          localStorage.removeItem(TOKEN_KEY);
          navigate("/admin/login", { replace: true });
          return;
        }

        if (!response.ok) {
          setError(data?.error || "Falha ao carregar mensagens.");
          return;
        }

        setMessages(data.messages || []);
      } catch (requestError) {
        setError("Nao foi possivel conectar com a API.");
      } finally {
        setLoading(false);
      }
    }

    loadMessages();
  }, [navigate, token]);

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  function handleLogout() {
    localStorage.removeItem(TOKEN_KEY);
    navigate("/admin/login", { replace: true });
  }

  return (
    <Page>
      <Container>
        <Header>
          <div>
            <Title>Painel admin</Title>
            <Status>Mensagens enviadas pelo formulário de contato.</Status>
          </div>

          <Actions>
            <Button $secondary onClick={() => window.location.reload()}>
              Atualizar
            </Button>
            <Button onClick={handleLogout}>Sair</Button>
          </Actions>
        </Header>

        {loading && <Status>Carregando mensagens...</Status>}
        {error && <Status>{error}</Status>}

        {!loading && !error && messages.length === 0 && (
          <Status>Nenhuma mensagem recebida ainda.</Status>
        )}

        <Grid>
          {messages.map((message) => (
            <Card key={message._id}>
              <Meta>
                <strong>{message.name}</strong>
                <span>{message.email}</span>
                <span>
                  {new Date(message.createdAt).toLocaleString("pt-BR")}
                </span>
              </Meta>
              <Message>{message.message}</Message>
            </Card>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
