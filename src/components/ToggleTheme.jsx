import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function  ToggleTheme() {
  const [theme, setTheme] = React.useState("winter");
  const toggleTheme = () => {
    setTheme(theme === "night" ? "winter" : "night");
  };
  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <label className="swap swap-rotate">
      <input onClick={toggleTheme} type="checkbox" />
      <div className="swap-on">
        <MdDarkMode />
      </div>
      <div className="swap-off">
      <MdOutlineDarkMode />
      </div>
    </label>
  );
}

export default ToggleTheme;