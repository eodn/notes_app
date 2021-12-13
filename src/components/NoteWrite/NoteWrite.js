import * as S from "./Style";
import Text from "./Text.js";

function NoteWrite() {
  return (
    <S.Positioner>
      <S.NoteBox />
      <S.BtnWrapper>
        <S.btn>메모</S.btn>
        <S.btn>취소</S.btn>
      </S.BtnWrapper>
    </S.Positioner>
  );
}

export default NoteWrite;
