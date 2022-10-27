import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { lightTheme, darkTheme } from "./GlobalStyle/theme";

import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  const [isChangedTheme, setIsChangedTheme] = useState("");

  const setColor = (color) => localStorage.setItem("color", color);

  const themeToggler = (e) => {
    e.target.checked ? setColor("light") : setColor("dark");

    setIsChangedTheme(localStorage.getItem("color"));

    localStorage.getItem("color");
  };

  useEffect(() => {
    setIsChangedTheme(localStorage.getItem("color"));
  }, []);

  const theme = isChangedTheme === "light" ? lightTheme : darkTheme;
  const switchChecked = isChangedTheme === "light" ? true : false;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header onClick={themeToggler} checked={switchChecked} />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
