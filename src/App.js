import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import About from "./pages/about";
import Admin from "./pages/admin";
import AdminLogin from "./pages/adminLogin";
import GerenciamentoObras from "./pages/gerenciamentoObras";
import FiscalizacaoTecnica from "./pages/fiscalizacaoTecnica";
import PlanejamentoEcontrole from "./pages/planejamentoEcontrole";
import ConsultoriaEspecializada from "./pages/consultoriaEspecializada";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/gerenciamentoObras" element={<GerenciamentoObras />} />
        <Route path="/fiscalizacaoTecnica" element={<FiscalizacaoTecnica />} />
        <Route path="/planejamentoEcontrole" element={<PlanejamentoEcontrole />} />
        <Route path="/consultoriaEspecializada" element={<ConsultoriaEspecializada />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
