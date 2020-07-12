import React from "react";
import styles from "./Input.module.css";
import { useSetTheme } from "../ThemeProvider";

const Input = (props) => {
  const setTheme = useSetTheme();

  const handleOnChange = (e) => {
    setTheme(e.target.value.length > 3 ? "dark" : "light");
  };
  return <input className={styles.input} {...props} onChange={handleOnChange} />;
};

export default Input;
