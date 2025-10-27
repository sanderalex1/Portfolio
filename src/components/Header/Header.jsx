import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";

function Header({ toggleThemeNavBar }) {
  const navLinks = ["home", "about", "works"];

  return (
    <header className={styles.header}>
      <div className="container">
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
            <button className={styles.themeButton} onClick={toggleThemeNavBar}>
              <FontAwesomeIcon icon={faPaintRoller} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
