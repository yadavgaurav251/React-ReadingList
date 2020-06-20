import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return <button className="book-list" onClick={toggleTheme}>Switch Theme</button>;
  }
}

export default ThemeToggle;
