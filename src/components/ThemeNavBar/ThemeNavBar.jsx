import { useState } from "react";
import styles from "./ThemeNavBar.module.css";

function ThemeNavBar({ isVisible, setTheme }) {
  const themes = [
    { name: "Classic", dataTheme: "light" },
    { name: "Dark", dataTheme: "dark" },
    { name: "Story", dataTheme: "story" },
    { name: "Retro", dataTheme: "retro" },
    { name: "Experimental", dataTheme: "experimental" },
  ];

  return (
    <>
      <div className={`${styles.sidebar} ${isVisible ? styles.visible : ``}`}>
        <h3 className="roboto">Select Theme</h3>
        <div className={styles.themeList}>
          {themes.map((themeItem) => (
            <button
              key={themeItem.name}
              className={styles.themeBox}
              data-theme={themeItem.dataTheme}
              onClick={() => setTheme(themeItem.dataTheme)}
            >
              <p>{themeItem.name}</p>
              <div className={styles.themePalet}>
                <span
                  className={`${styles.colorBox} ${styles.secondaryBg}`}
                ></span>
                <span className={`${styles.colorBox} ${styles.text}`}></span>
                <span
                  className={`${styles.colorBox} ${styles.secondaryText}`}
                ></span>
                <span className={`${styles.colorBox} ${styles.accent}`}></span>
                <span
                  className={`${styles.colorBox} ${styles.secondaryAccent}`}
                ></span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default ThemeNavBar;
