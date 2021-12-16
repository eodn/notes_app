import React, { useState } from "react";
import * as S from "./Style";
import { useEffect } from "react";

function Item() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setItemList(itemList ? JSON.parse(localStorage.getItem("key")) : []);
  }, []);

  const onClick = () => {
    localStorage.removeItem("key")
  } 

  return (
    <S.Positioner>
      {itemList && itemList.map((data) => (<S.ItemBox readOnly value={data.content} />))}
      <S.btn to="/write">메모하기</S.btn>
    </S.Positioner>
  );
}

export default Item;
