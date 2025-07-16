import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
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
    <header className="header-container">
      <div className="header-content">
        <img src="/ericaLogo.svg" alt="logo" />

        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <nav className="nav-header desktop-nav">
          <ul>
            <li>
              <a href="#" onClick={(e) => scrollToSection(e, "parcerias")}>
                Divulgações
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => scrollToSection(e, "metricas")}>
                Métricas
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => scrollToSection(e, "depoimentos")}>
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => scrollToSection(e, "parceiros")}>
                Parcerias
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => scrollToSection(e, "faq")}>
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => scrollToSection(e, "faleConosco")}
                className="contact-button"
              >
                Seja um parceiro!
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Nav para mobile - aparece fora do header-content */}
      <nav className={`nav-header mobile-nav ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#" onClick={(e) => scrollToSection(e, "parcerias")}>
              Divulgações
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => scrollToSection(e, "metricas")}>
              Métricas
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => scrollToSection(e, "depoimentos")}>
              Depoimentos
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => scrollToSection(e, "parceiros")}>
              Parcerias
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => scrollToSection(e, "faq")}>
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => scrollToSection(e, "faleConosco")}
              className="contact-button"
            >
              Seja um parceiro!
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
