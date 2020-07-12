import React from "react";
import "./Button.css";
import { ThemeContext } from "../App";

const Button = ({ children, ...props }) => {
  const isDark = React.useContext(ThemeContext);

  return (
    <button className="button" {...props}>
      {children} {isDark ? "🌜" : "🌝"}
    </button>
  );
};

export default Button;
