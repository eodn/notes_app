import styled from "styled-components";



export const Positioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;




export const ItemBox = styled.textarea`
  width: 550px;
  height: 300px;
  border-radius: 7px;
  margin-bottom: 15px;
  margin-right: 15px;
  display: flex;
  overflow: scroll;
  
  
  resize: none ;
  background-attachment: local;
  background-image:
    linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
  line-height: 31px;
  padding: 8px 10px;
  `;

export const DeleteBtn = styled.button`
  
  `;