import styled from "styled-components";

export const Positioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoteBox = styled.textarea`
  width: 550px;
  height: 600px;
  background: white;
  border-radius: 16px;
  padding: 10px;
  font-size: 24px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  border: 1px solid yellow;
  margin-top: 30px;
`;

export const btn = styled.button`
  height: 50px;
  width: 100px;
  font-size: 20px;
  &:hover {
    border: 1px solid #fff;
    background-color: #000;
    color: #fff;
  }
`;