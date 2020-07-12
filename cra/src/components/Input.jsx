import React from "react";
import "./Input.css";
import { SetThemeContext } from "../App";

const Input = (props) => {
  const setTheme = React.useContext(SetThemeContext);
  const handleOnChange = (e) => {
    setTheme(e.target.value.length > 3 ? "dark" : "light");
  };
  return <input className="input" {...props} onChange={handleOnChange} />;
};

export default Input;
