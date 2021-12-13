import React from "react";
import { createGlobalStyle } from 'styled-components';
import NoteWrite from "./components/NoteWrite/NoteWrite";
import Writing_box from "./components/NoteWrite/NoteWrite";


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


function App() {
  return (
    <>
    <h1>Notes</h1>
    <GlobalStyle />
    <NoteWrite />
    </>
  )
}

export default App;
