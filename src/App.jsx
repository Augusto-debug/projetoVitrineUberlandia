import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import Parceiros from "./components/Parceiros/Parceiros"
import Whatsapp from "./components/Whatsapp"
import Apresentacao from "./Apresentacao"
import SectionMetricas from "./Metricas/Metricas"
import SecaoDepoimentos from "./Depoimentos/SecaoDepoimentos"

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Parceiros />
      <SectionMetricas />
      <SecaoDepoimentos />
      <Whatsapp />
    </>
  )
}

export default App
