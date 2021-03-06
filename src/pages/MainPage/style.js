import styled from "styled-components";
import { Link } from "react-router-dom";

export const Positioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const btn = styled(Link)`
  height: 50px;
  width: 100px;
  margin: auto;
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