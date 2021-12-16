import React from "react";
import { createGlobalStyle } from "styled-components";
import * as S from "./Style";
import NoteWrite from "../../components/NoteWrite/NoteWrite";



const GlobalStyle = createGlobalStyle`
  body {
    background: #212529;
  }
  h1 {
    font-size: 50px;
    color: #f1f3f5;
    text-align: center ;
  }
`;

function writepage() {
  return (
    <div>
      <GlobalStyle />
      <h1>Notes</h1>
      <NoteWrite />
      
    </div>
  );
}

export default writepage;
