import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";

import Item from "../../components/Memoitem/Item";
import * as S from "./Style";

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
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setItemList(itemList ? JSON.parse(localStorage.getItem("key")) : []);
  }, []);

  return (
    <>
    <h1>Notes</h1>
    <S.Positioner>
      <GlobalStyle />

      
      {itemList && itemList.map((data) => (<Item memo={data} itemList={itemList}/>))}
      
    </S.Positioner>
    <S.btn to="/write">메모하기</S.btn>
    </>
  );
}

export default MainPage;
