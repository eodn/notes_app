import React from "react";
import Text from "./Text.js";
import styled from "styled-components";

const Writing_boxBlock = styled.div`
  width: 512px;
  height: 700px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 50px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  
`;

function Writing_box({}) {
  return (
    <Writing_boxBlock>
        <Text />
    </Writing_boxBlock>
  );
}

export default Writing_box;
