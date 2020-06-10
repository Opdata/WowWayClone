import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import GlobalStyle from "./Styles/GlobalStyles";
import Main from "./Components/Main";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};

export default App;
