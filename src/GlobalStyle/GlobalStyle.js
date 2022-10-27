import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .cards-container {
    background: ${({ theme }) => theme.bg};
  }

  .today-weather-card {
    background: ${({ theme }) => theme.bg};
  }

  .description {
    background-color: ${({ theme }) => theme.bg};
  }

  .search-city__input {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }

  .css-137ul40-MuiButtonBase-root-MuiIconButton-root {
    color: ${({ theme }) => theme.text};
  }

  .weather-card {
    background: ${({ theme }) => theme.cards};
  }

  .btn {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
`;
