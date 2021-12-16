import React, { useState } from "react";
import * as S from "./Style";
import { useEffect } from "react";

function Item() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setItemList(itemList ? JSON.parse(localStorage.getItem("key")) : []);
  }, []);

  return (
    <S.Positioner>
      {itemList && itemList.map((data) => (<S.ItemBox readOnly value={data.content} />))}
    </S.Positioner>
  );
}

export default Item;
