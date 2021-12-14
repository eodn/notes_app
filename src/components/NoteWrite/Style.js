import { Link } from "react-router-dom";
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
  font-size: 14px;

  background-attachment: local;
  background-image:
    linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
  line-height: 31px;
  padding: 8px 10px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  /* border: 1px solid yellow; */
  margin-top: 30px;
`;

export const btn = styled(Link)`
  height: 50px;
  width: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black; 
  border-radius: 4px;
  font-size: 20px;
  &:hover {
    border: 1px solid #fff;
    background-color: #000;
    color: #fff;
  }
`;