import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #8F4BC7;
    --light-purple: #DCA8EE;
    --dark-purple: #BB7AAB;
    --dark-blue: #192067;
    --blue: #6A90E1;
    --light-blue: #69CCE2;
    --black: #0A0A09;
    --orange: #FF9B2D;
    --yellow: #FFCE3B;
    --white: #fff;
    --red: #D5222B;
    --dark-salmon: #F25553;
    --salmon: #FF9790;
    --gray: #7C7575
  }
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--white);
    color: var(--black);
    font-size: 1rem;
    font-family: 'Mulish', sans-serif;
    overflow-x: hidden;
  }
  h1 {
    font-family: 'Suez One', serif;
  }

  h2, h3 {
    font-family: 'Suez One', serif;
  }

  input {
    outline: none;
  }
  select {
    outline: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar{
  width: 10px;
  height: 10px;
  }

  ::-webkit-scrollbar-thumb{
  background: var(--purple);
  border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb:hover{
  background: var(--dark-purple);

  }

  ::-webkit-scrollbar-track{
  background: #E3E3E3;
  border-radius: 30px;
  box-shadow: inset 0px 0px 0px 0px #F0F0F0;
  }
  
  button {
    &:hover {
      filter: brightness(.85);
      transition: all .2s;
    }
  }
`;
