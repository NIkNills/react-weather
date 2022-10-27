import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat";
    font-style: normal;
  }

  li {
    list-style-type: none;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .theme {
    background-color: ${({ theme }) => theme.bg};
  }

  .cards-theme {
    background-color: ${({ theme }) => theme.cards};
  }

  .search-city__input {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }

  .lang-icon {
    color: ${({ theme }) => theme.text};
  }

  .btn {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
`;
