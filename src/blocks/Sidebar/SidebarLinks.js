import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavLinkSidebar = styled(Link)`
  display: flex;
  text-decoration: none;
  height: 40px;
  width: 350px;
  font-size: 20px;
  margin-top: 10px;
  color: #5e5e5e;
  font-weight: bolder;
  cursor: pointer;
  span {
    height: 30px;
    width: 30px;
    margin-left: 20px;
    margin-top: 4px;
  }
  p {
    height: 40px;
    width: 60%;
    margin: auto 0px;
    margin-left: 20px;
    margin-top: 4px;
  }
  &:hover {
    color: rgb(0, 225, 255);
  }
`;
