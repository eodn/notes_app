import React from "react";
import { createGlobalStyle } from 'styled-components';
import Writing_box from "./components/Writing_box";
import Text from "./components/Text";

const GlobalStyle = createGlobalStyle`
  body {
    background: #212529;
  }
  h1 {
    font-size: 50px;
    color: #f1f3f5;

    text-align: center ;
  }
  button {
      margin: 0 auto;
      display:block;
      background-color: #868e96;
			padding: 15px 30px;
      border-color: #f8f9fa;
      border-radius: 4px;
			font-size: 16px;
			cursor: pointer;
  }
`;


function App() {
  return (
    <>
    <h1>Notes</h1>
    <GlobalStyle />
    <Writing_box />
    <button>메모하기</button>
    </>
  )
}

export default App;
