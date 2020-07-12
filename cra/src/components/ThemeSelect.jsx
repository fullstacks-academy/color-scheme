import React from "react";
import Select from "./Select";
import Option from "./Option";
import { useSetTheme, useTheme } from "../ThemeProvider";

const ThemeSelect = () => {
  const setTheme = useSetTheme();
  const { themeMode } = useTheme();

  const handleThemeChanged = React.useCallback(
    (e) => {
      setTheme(e.target.value);
    },
    [setTheme]
  );

  return (
    <Select name="color" value={themeMode} onChange={handleThemeChanged}>
      <Option value="default">Default</Option>
      <Option value="dark">Dark</Option>
      <Option value="light">Light</Option>
    </Select>
  );
};

export default ThemeSelect;
