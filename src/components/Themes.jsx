import { FaCog } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";
import { themes } from "../data";
import { ThemeItem } from "./ThemeItem";
import "./themes.css";
import { useEffect, useState } from "react";

const getStorageColor = () => {
  let color = "hsl(252, 35%, 51%)";

  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }

  return color;
};

const getStorageTheme = () => {
  let theme = "light-theme";

  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};

export const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());

  const changeColor = (color) => {
    setColor(color);
  };

  const toogleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--first-color", color);
    localStorage.setItem("color", color);
  }, [color]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div>
      <div className={`${showSwitcher ? "show-switcher" : ""} style__switcher`}>
        <div
          className="style__switcher-toggler"
          onClick={() => setShowSwitcher(true)}
        >
          <FaCog />
        </div>

        <div className="theme__toggler" onClick={toogleTheme}>
          {theme === "light-theme" ? <BsMoon /> : <BsSun />}
        </div>
        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme, index) => {
            return (
              <ThemeItem key={index} {...theme} changeColor={changeColor} />
            );
          })}
        </div>

        <div
          className="style__switcher-close"
          onClick={() => setShowSwitcher(false)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};
