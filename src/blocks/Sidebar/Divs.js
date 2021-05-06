import styled from "styled-components";

export const Pagecontainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const HorizontalLineOne = styled.div`
  width: 100%;
  height: 10px;
  margin: auto;
  margin-top: 35%;
`;

export const ProfilePictureFrame = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const ProfilePictureSidebar = styled.div`
  height: 60px;
  width: 60px;
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 50%;
  background: rgb(180, 180, 180);
  display: flex;
  p {
    text-align: center;
    margin-top: 9px;
    font-size: 30px;
    color: white;
  }
`;

export const ProfileInformationSidebar = styled.div`
  height: 80px;
  width: 50%;
  margin-left: 20px;
  p {
    height: 30px;
    width: 100%;
    margin: auto;
    margin-top: 10px;
    font-size: 20px;
    font-weight: lighter;
  }
  span {
    height: 30px;
    width: 100%;
    margin: auto;
    font-size: 20px;
    font-weight: 600;
    color: rgb(90, 90, 90);
  }
`;

export const HorizontalLineTwo = styled.div`
  width: 100%;
  height: 10px;
`;

export const SidebarLinks = styled.div`
  height: 60px;
  width: 350px;
  justify-content: center;
  display: inline-block;
  margin-bottom: 10px;
  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;

export const ProfilePicture = styled.div`
  height: 80px;
  width: 80px;
  margin: auto;
  margin-top: 10%;
  border-radius: 50%;
  background: rgb(180, 180, 180);
  display: flex;
  p {
    text-align: center;
    margin-top: 22.5px;
    font-size: 25px;
    color: white;
  }
`;

export const ProfileTextContainer = styled.div`
  height: 90px;
  width: 85%;
  margin: auto;
  display: inline-block;
  text-align: center;
  margin-top: 20px;
  margin-left: 8%;
  span {
    height: 20px;
    width: 80%;
    display: inline-block;
    margin: auto 2px;
    color: rgb(109, 109, 109);
  }
`;

export const HorizontalLineProfile = styled.div`
  width: 87%;
  height: 10px;
  margin: auto;
`;

export const UnderProfileText = styled.div`
  height: 40px;
  width: 100%;
  margin: auto;
  margin-top: 5px;
  display: inline-block;
`;

export const DateFontSize = styled.div`
  font-size: 13px;
  justify-content: center;
`;

export const ProfileTextContainerTwo = styled.div`
  height: 25px;
  width: 87%;
  margin: auto;
  display: inline-block;
  text-align: center;
  margin-left: 7%;
  input {
    height: 48px;
    width: 98%;
    border: none;
    margin: auto;
    justify-content: start;
    border-radius: 5px;
    background-color: rgb(245, 245, 245);
    margin-top: 10px;
  }
  input[placeholder] {
    padding-left: 20px;
    height: 48px;
    width: 94%;
  }
`;

export const TextActionsProfile = styled.div`
  height: 30px;
  width: 100%;
  margin: auto;
  text-align: start;
  color: rgb(2, 45, 80);
  font-weight: normal;
`;

export const ActionbuttonSpacing = styled.div`
  height: 30px;
  width: 100%;
  margin-top: 20px;
`;

export const DropdownSidebar = styled.div`
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

export const Logout = styled.div`
  height: 20px;
  width: 200px;
  position: absolute;
  top: 910px;
  left: 25px;
  p {
    cursor: pointer;
    font-weight: 600;
  }
`;
