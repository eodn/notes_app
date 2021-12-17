import React, { useState } from "react";
import * as S from "./Style";
import { useEffect } from "react";

function Item({memo, itemList}) {
  const handleDeleteNote = () => {
    localStorage.setItem(
      'key',
      JSON.stringify(
        itemList.filter((data) => {
          return data.id !== memo.id;
        }),
      ),
    );
    window.location.reload();
  };

  return (
    <S.Positioner>
      <S.ItemWrapper>
        <S.ItemBox readOnly value={memo.content} />
        <S.DeleteBtn onClick={handleDeleteNote}>❎</S.DeleteBtn>
      </S.ItemWrapper>
    </S.Positioner>
  );
}

export default Item;
