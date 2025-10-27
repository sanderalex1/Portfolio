import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import ThemeNavBar from "./components/ThemeNavBar/ThemeNavBar";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [isThemeVisible, setIsThemeVisible] = useState(false);

  const toggleThemeNavBar = () => {
    setIsThemeVisible(!isThemeVisible);
  };

  const handleSetTheme = (themeName) => {
    setTheme(themeName);
    localStorage.setItem("theme", themeName);
  };

  useEffect(() => {
    document.querySelector("body").setAttribute(`data-theme`, theme);
  }, [theme]);

  return (
    <>
      <ThemeNavBar isVisible={isThemeVisible} setTheme={handleSetTheme} />
      <Header toggleThemeNavBar={toggleThemeNavBar} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
