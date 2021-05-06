import styled from "styled-components";

export const ActionButton = styled.button`
  height: 35px;
  width: 86%;
  margin-top: 12px;
  margin-left: 32px;
  border: none;
  color: white;
  font-size: 12px;
  background: rgb(0, 66, 110);
  border-radius: 5px;
  box-shadow: 2px 0px 2px #c4bcbb;
  cursor: pointer;
`;

export const AddButton = styled.button`
  height: 40px;
  width: 40%;
  margin-top: 12px;
  margin-left: 260px;
  border: none;
  color: white;
  font-size: 12px;
  background: rgb(0, 66, 110);
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  p {
    font-size: 14px;
    position: relative;
    bottom: 4px;
  }
  span {
    height: 37px;
    width: 20px;
    position: relative;
    left: 22px;
  }
`;
