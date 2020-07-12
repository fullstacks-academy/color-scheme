import React from "react";
import Card from "./components/Card";
import Logo from "./components/Logo";
import Heading from "./components/Heading";
import Select from "./components/Select";
import Option from "./components/Option";
import Input from "./components/Input";
import Button from "./components/Button";

export const ThemeContext = React.createContext(null);
export const SetThemeContext = React.createContext(null);

function App() {
  const isLightPrefers = window.matchMedia("(prefers-color-scheme: light)")
    .matches;

  const perferTheme = isLightPrefers ? "light" : "dark";
  const [theme, setTheme] = React.useState(perferTheme);

  const handleThemeChanged = (e) => {
    const selected = e.target.value;
    setTheme(selected === "default" ? perferTheme : selected);
  };

  const isDark = theme === "dark";

  return (
    <SetThemeContext.Provider value={setTheme}>
      <ThemeContext.Provider value={isDark}>
        <div className="root" data-scheme={theme}>
          <Card>
            <Logo />
            <Heading>Fullstacks Academy</Heading>
            <Select name="color" id="color" onChange={handleThemeChanged}>
              <Option value="default">Default</Option>
              <Option value="dark">Dark</Option>
              <Option value="light">Light</Option>
            </Select>
            <Input type="text" placeholder="Your name..." />
            <Button isDark={theme === "dark"}>Login</Button>
          </Card>
        </div>
      </ThemeContext.Provider>
    </SetThemeContext.Provider>
  );
}

export default App;
