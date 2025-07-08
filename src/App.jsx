import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import Parceiros from "./components/Parceiros/Parceiros"
import Whatsapp from "./components/Whatsapp"
import Apresentacao from "./Apresentacao"
import SectionMetricas from "./Metricas/Metricas"
import SecaoDepoimentos from "./Depoimentos/SecaoDepoimentos"
import SecaoFaq from "./components/Faq/SecaoFaq"
import FaleConosco from "./components/FaleConosco/FaleConosco"
import Footer from "./components/Footer/Footer"
import SecaoParceiros from "./components/Parceiros/SecaoParceiros"

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Parceiros />
      <SectionMetricas />
      <SecaoDepoimentos />
      <SecaoFaq />
      <SecaoParceiros />
      <FaleConosco />
      <Footer />
      <Whatsapp />
    </>
  )
}

export default App
