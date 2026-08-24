import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {

  // Theme state
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply theme
  useEffect(() => {
    document.body.dataset.theme = theme;

    localStorage.setItem(
      "theme",
      theme
    );
  }, [theme]);

  return (
    <>
      <header className="site-header">

        <nav className="navbar">

          {/* Logo */}
          <div className="logo">
            D
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>

          </ul>

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={() =>
              setTheme(
                theme === "light"
                  ? "dark"
                  : "light"
              )
            }
            aria-label="Toggle Dark mode"
            title="Toggle dark mode"
          >
            {theme === "dark" ? "🌙" : "🌞"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            ≡
          </button>

        </nav>

      </header>
    </>
  );
}

export default Navbar;