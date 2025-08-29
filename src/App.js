import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SuccessCases from "./components/SuccessCases";
import About from "./components/About"
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Services />
      <SuccessCases />
      <About />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
