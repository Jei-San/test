import styled from "styled-components";

export const Page = styled.div`
  background: #fff;
  height: 100%;
  width: 58.6%;
  margin-left: 2px;
  display: inline-block;
  justify-content: center;
`;

export const TopPage = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
`;

export const TopPageNavLink = styled.div`
  display: inline-block;
  text-decoration: none;
  height: 4px;
  width: 180px;
  margin-top: 68px;
  font-size: 23px;
  text-align: center;
  color: #5e5e5e;
  font-weight: bolder;
  cursor: pointer;
  p {
    height: 60px;
    width: 150px;
    position: relative;
    bottom: 75px;
    left: 15px;
  }
  &:hover {
    color: rgb(0, 225, 255);
    background: rgb(0, 225, 255);
  }
`;

export const TopLine = styled.hr`
  background: #c4bcbb;
  height: 2px;
  border: 4px;
  width: 100%;
  margin: auto;
`;

export const BottomPage = styled.div`
  height: 92.5%;
  width: 100%;
`;
export const ActionButtonPosition = styled.div`
  height: 20%;
  width: 40%;
  margin: auto;
  margin-right: 20px;
`;
