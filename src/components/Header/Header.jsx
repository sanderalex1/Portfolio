import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
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
          <a href="#">Home </a> <a href="#">Works</a>
          <a href="#">About</a>{" "}
          <button>
            <img src="/Portfolio/paint.png" alt="Paint icon" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
