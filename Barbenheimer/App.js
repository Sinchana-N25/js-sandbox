import { React, useState, createContext } from "react";
import ThemeSwitcher from "./ThemeSwitcher.js"
import Home from "./Home.js"
import "./styles.css";

export const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("barbie");

  // Toggle theme function
  function toggleTheme() {
    setTheme(function (prevTheme) {
      return prevTheme === "barbie" ? "oppenheimer" : "barbie";
    });
  }

  return <>{<ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeSwitcher />
      <Home /> 
    </ThemeContext.Provider>}</>;
}

