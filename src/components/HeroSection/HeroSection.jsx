import React from 'react'
import './HeroSection.css'

const HeroSection = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id='hero' className='hero-container'>
      <div className='hero-content'>
        <div className='hero-text'>
          <h1>Vitrine Uberlândia</h1>
          <h2>Érica</h2>
          <p className='hero-description'>
            Desde 2018, impulsionando marcas, produtos e serviços em 
            Uberlândia.
          </p>
          <p className='hero-details'>
            Com criatividade, estratégia e um atendimento personalizado, meu 
            objetivo é conectar pessoas e negócios de forma autêntica e eficaz.
          </p>
          <p className='hero-details'>
            Sou especialista em Marketing Digital, apaixonada por histórias de 
            vida e por criar conexões que transformam. Acredito no poder de 
            trabalhar com propósito, ao lado de pessoas honestas e dedicadas, 
            que buscam conquistar seu espaço com amor pelo que fazem.
          </p>
            <div className='hero-actions'>
              <button className='partner-btn' onClick={() => scrollToSection("faleConosco")}>Seja um parceiro!</button>
            </div>
        </div>
        <div className='hero-image'>
          <img src="/imgHeroSection.jpg" alt="Érica - Vitrine Uberlândia" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
