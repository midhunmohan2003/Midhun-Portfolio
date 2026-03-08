import React, { useState, useEffect } from "react";
import "./header.css";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [scrollHeader, setScrollHeader] = useState(false);

  /* Change header background on scroll */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close menu when clicking link */
  const handleNavClick = (nav) => {
    setActiveNav(nav);
    setToggle(false);
  };

  return (
    <header className={scrollHeader ? "header scroll-header" : "header"}>
      <nav className="nav container">
        
        {/* Logo */}
        <a href="#home" className="nav__logo">
          Midhun .
        </a>

        {/* Menu */}
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">

            <li className="nav__item">
              <a
                href="#home"
                onClick={() => handleNavClick("#home")}
                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => handleNavClick("#about")}
                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => handleNavClick("#skills")}
                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => handleNavClick("#projects")}
                className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>

          </ul>

          {/* Close button */}
          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(false)}
          ></i>
        </div>

        {/* Hamburger menu */}
        <div className="nav__toggle" onClick={() => setToggle(true)}>
          <i className="uil uil-apps"></i>
        </div>

      </nav>
    </header>
  );
}

export default Header;