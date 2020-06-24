import React, {  useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button className="book-list" onClick={toggleTheme}>
      Switch Theme
    </button>
  );
};

export default ThemeToggle;
