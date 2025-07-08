import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <section className="header-container">
      <img src="/logoVitrineUberlandia.png" alt="logo" />

      <button
        className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <nav className={`nav-header ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#parcerias" onClick={() => scrollToSection("parcerias")}>
              Parcerias
            </a>
          </li>
          <li>
            <a href="#metricas" onClick={() => scrollToSection("metricas")}>
              Métricas
            </a>
          </li>
          <li>
            <a
              href="#depoimentos"
              onClick={() => scrollToSection("depoimentos")}
            >
              Depoimentos
            </a>
          </li>
          <li>
            <a
              href="#parceiros"
              onClick={() => scrollToSection("parceiros")}
            >
              Divulgações
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => scrollToSection("faq")}>
              Faq
            </a>
          </li>
          <li>
            <a href="#faleConosco" onClick={() => scrollToSection("faleConosco")}>
              Entre em Contato
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
