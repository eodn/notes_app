import React from "react";
import { createGlobalStyle } from "styled-components";

import Item from "../../components/Memoitem/Item";
import * as S from "./style";

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

function MainPage() {
  return (
    <S.Positioner>
      <GlobalStyle />

      <h1>Notes</h1>
      <Item />
      <S.btn to="/write">메모하기</S.btn>
    </S.Positioner>
  );
}

export default MainPage;
