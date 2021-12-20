import styled from "styled-components";



export const Positioner = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ItemWrapper = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;


export const ItemBox = styled.textarea`
  width: 550px;
  height: 300px;
  margin:auto;
  border-radius: 10px;
  margin-bottom: 20px;
  
  display: flex;
  align-items: center;


  
  resize: none ;
  background-attachment: local;
  background-image:
    linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
  line-height: 31px;
  padding: 8px 10px;
  `;

export const DeleteBtn = styled.div`
  cursor: pointer;
   
  `;