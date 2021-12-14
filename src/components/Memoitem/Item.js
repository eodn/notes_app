import React, { useState } from "react";
import NoteWrite from "../NoteWrite/NoteWrite";
import * as S from "../NoteWrite/Style";
import { useEffect } from "react";


function Item() {
  const [itemList, setItemList] = useState({});
  
  useEffect(() => {
  }, [])
  return (
    <S.Positioner>
      
      <S.btn to="/write" >메모하기</S.btn>
    </S.Positioner>
  );
}

export default Item;