import React from "react";
import { createGlobalStyle } from "styled-components";
import NoteWrite from "./components/NoteWrite/NoteWrite";
import { Route, Routes , BrowserRouter} from "react-router-dom";
import Item from "./components/Memoitem/Item";

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
    <BrowserRouter>
      <h1>Notes</h1>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Item />} />
          <Route path="/write" element={<NoteWrite />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
