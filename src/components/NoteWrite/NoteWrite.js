import { useEffect, useState } from "react";
import * as S from "./Style";

function NoteWrite() {
  const [content, setContent] = useState({});

  const onSubmit = () => {
    if(content.length > 0) {
      alert("메모가 생성되었습니다.");
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
        <S.btn to="/" onClick={onSubmit} >메모</S.btn>
        <S.btn to="/" onClick={onCancel}>취소</S.btn>
      </S.BtnWrapper>
    </S.Positioner>
  );
}

export default NoteWrite;
