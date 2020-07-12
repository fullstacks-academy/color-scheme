import React from "react";

const ThemeContext = React.createContext(null);
const SetThemeContext = React.createContext(null);

const getEnvPreferredTheme = () => {
  const isLightPrefers = window.matchMedia("(prefers-color-scheme: light)");
  return isLightPrefers.matches ? "light" : "dark";
};

const getUserPreferredTheme = () =>
  window.localStorage.getItem("theme") ?? "default";

export const ThemeProvider = ({ children }) => {
  const [themeMode, setTheme] = React.useState(getUserPreferredTheme);
  const theme = themeMode === "default" ? getEnvPreferredTheme() : themeMode;

  React.useEffect(() => {
    document.body.dataset.theme = theme;

    window.localStorage.setItem("theme", themeMode);
    return () => document.body.removeAttribute("theme");
  }, [themeMode]);

  React.useEffect(() => {
    const syncTheme = (e) => {
      if (e.key !== "theme") return;
      setTheme(e.newValue);
    };
    window.addEventListener("storage", syncTheme);

    return () => window.removeEventListener("storage", syncTheme);
  }, []);

  return (
    <SetThemeContext.Provider value={setTheme}>
      <ThemeContext.Provider value={{ theme, themeMode }}>
        {children}
      </ThemeContext.Provider>
    </SetThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context == null)
    throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

export const useSetTheme = () => {
  const context = React.useContext(SetThemeContext);
  if (context == null)
    throw new Error("useSetTheme must be used within ThemeProvider");
  return context;
};
