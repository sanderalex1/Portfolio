import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const navLinks = ["home", "about", "works"];

  return (
    <header style={{ padding: "1rem 2rem" }}>
      <nav className={styles.navBar}>
        <div className={styles.navLeft}>
          <img src="/Portfolio/placeholder.jpg" alt="profile picture" />
          <a href="#" className="roboto">
            Alex
          </a>
        </div>
        <div className={`${styles.navRight} roboto`}>
          {navLinks.map((link) => (
            <NavLink
              key={link}
              to={`/Portfolio/${link}`}
              className={({ isActive }) => (isActive ? styles.active : null)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </NavLink>
          ))}
          <button>
            <img src="/Portfolio/paint.png" alt="Paint icon" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
