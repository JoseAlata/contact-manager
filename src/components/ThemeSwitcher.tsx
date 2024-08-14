import { useEffect, useState } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button className='theme-switcher__button' onClick={toggleTheme}>
      {theme === "light" ? (
        <span className='material-symbols-outlined'>dark_mode</span>
      ) : (
        <span className='material-symbols-outlined'>wb_sunny</span>
      )}
    </button>
  );
}

export default ThemeSwitcher;
