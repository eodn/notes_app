import styled from "styled-components";

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
    border: 1px solid #fff;
    background-color: #000;
    color: #fff;
  }
`;