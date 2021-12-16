import { useEffect, useState } from "react";
import * as S from "./Style";
import { nanoid } from "nanoid";

const NoteWrite = () => {
  const [content, setContent] = useState("");
  let [id, setId] = useState(nanoid());

  const onSubmit = () => {
    if (content.length > 0) {
      let itemList = localStorage.getItem("key");
      try {
        itemList = itemList ? JSON.parse(itemList) : [];
        itemList.push({ id, content });
        localStorage.setItem("key", JSON.stringify(itemList));

        alert("메모가 생성되었습니다.");
      } catch (e) {
        console.log(e);
      }
      setContent("");
    }
  };

  const onCancel = () => {
    setContent("");
  };

  return (
    <S.Positioner>
      <S.NoteBox onChange={(e) => setContent(e.target.value)} value={content} />
      <S.BtnWrapper>
        <S.btn to="/" onClick={onSubmit}>
          메모
        </S.btn>
        <S.btn to="/" onClick={onCancel}>
          취소
        </S.btn>
      </S.BtnWrapper>
    </S.Positioner>
  );
};

export default NoteWrite;
