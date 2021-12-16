import styled from "styled-components";
import { Link } from "react-router-dom";


export const Positioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    
  }
`;


export const ItemBox = styled.textarea`
  width: 500px;
  height: 280px;
  background-color: #dee2e6;
  border-radius: 7px;
  margin-bottom: 15px;
  
  resize: none ;
  background-attachment: local;
  background-image:
    linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
  line-height: 31px;
  padding: 8px 10px;
  `;