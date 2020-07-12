import React from "react";
import styles from "./Button.module.css";
import { useTheme } from "../ThemeProvider";

const Button = ({ children, ...props }) => {
  const { theme } = useTheme();

  return (
    <button className={styles.button} {...props}>
      {children} {theme === 'dark' ? "🌜" : "🌝"}
    </button>
  );
};

export default Button;
