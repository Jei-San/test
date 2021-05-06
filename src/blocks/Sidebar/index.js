import React, { useState } from "react";
import "./Sidebar.css";
import { Line } from "./HorizontalLine.js";
import { Side } from "./Sidebar";
import { NavLinkSidebar } from "./SidebarLinks";
import { SidebarDataLinks } from "./SidebarDataLinks";
import { Prof, ProfileAccountName } from "./Profile";
import { ActionButton, AddButton } from "./Button";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as Divs from "./Divs";
import * as Page from "./Page";
import { AccordionData } from "./AccordionData";

const Index = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }
    setClicked(i);
  };
  return (
    <Divs.Pagecontainer>
      <Side>
        <div className="horizontal-line-container">
          <Divs.HorizontalLineOne>
            <Line></Line>
          </Divs.HorizontalLineOne>
          <Divs.ProfilePictureFrame>
            <Divs.ProfilePictureSidebar>
              <p>J</p>
            </Divs.ProfilePictureSidebar>
            <Divs.ProfileInformationSidebar>
              <p>juan@l3rn.io</p>
              <span>thepirate.dev</span>
            </Divs.ProfileInformationSidebar>
            <IoIcons.IoIosArrowDown className="sidebar-icon-profile navlink-hover" />
          </Divs.ProfilePictureFrame>
          <Divs.HorizontalLineTwo>
            <Line></Line>
          </Divs.HorizontalLineTwo>
          {SidebarDataLinks.map((item, index) => {
            return (
              <Divs.SidebarLinks>
                <NavLinkSidebar to={item.path} key={index}>
                  <span>{item.icon}</span>
                  <p>{item.title}</p>
                </NavLinkSidebar>
              </Divs.SidebarLinks>
            );
          })}
          {AccordionData.map((item, i) => {
            return (
              <Divs.SidebarLinks>
                <Divs.DropdownSidebar
                  onClick={() => toggle(i)}
                  index={item.index}
                >
                  <span>{item.icon}</span>
                  <p>{item.text}</p>
                  <span>
                    <IoIcons.IoIosArrowDown />
                  </span>
                </Divs.DropdownSidebar>
                {clicked === i ? (
                  <div className="accordioncontent show">{item.options}</div>
                ) : null}
              </Divs.SidebarLinks>
            );
          })}
          <Divs.Logout>
            <p>CERRAR SESION</p>
          </Divs.Logout>
        </div>
      </Side>
      <Prof>
        <Divs.ProfilePicture>
          <p>S</p>
        </Divs.ProfilePicture>
        <ProfileAccountName>sealtiel</ProfileAccountName>
        <Divs.ProfileTextContainer>
          <span>sealtiel+course@x8bit.com</span>
          <Divs.UnderProfileText>
            <span className={Divs.DateFontSize}>Creado el: 19/04/2021</span>
            <span className={Divs.DateFontSize}>No suscrito al newsletter</span>
          </Divs.UnderProfileText>
        </Divs.ProfileTextContainer>
        <Divs.HorizontalLineProfile>
          <Line></Line>
        </Divs.HorizontalLineProfile>
        <Divs.ProfileTextContainerTwo>
          <Divs.TextActionsProfile>
            <span>Acciones</span>
          </Divs.TextActionsProfile>
        </Divs.ProfileTextContainerTwo>
        <ActionButton className="Hover">Convertir en usuario</ActionButton>
        <ActionButton className="Hover">
          Enviar correo de reestablecer contraseña
        </ActionButton>
        <ActionButton className="Hover">
          Establecer contraseña manualmente
        </ActionButton>
        <Divs.ProfileTextContainerTwo>
          <Line></Line>
        </Divs.ProfileTextContainerTwo>
        <Divs.ProfileTextContainerTwo>
          <Divs.TextActionsProfile>
            <span>Nombre</span>
            <input placeholder="Nombre del contacto" />
            <span>Correo</span>
            <input placeholder="correo@example.com" />
            <span>Pais</span>
            <input placeholder="Mexico" />
            <span>Estado</span>
            <input placeholder="Nuevo Leon" />
            <span>Ciudad</span>
            <input placeholder="Monterrey" />
          </Divs.TextActionsProfile>
        </Divs.ProfileTextContainerTwo>
        <Divs.ActionbuttonSpacing>
          <ActionButton className="Hover">Guardar</ActionButton>
        </Divs.ActionbuttonSpacing>
      </Prof>
      <Page.Page>
        <Page.TopPage>
          <Page.TopPageNavLink to="/">
            <p>Cursos</p>
          </Page.TopPageNavLink>
          <Page.TopPageNavLink to="/">
            <p>Actividad</p>
          </Page.TopPageNavLink>
        </Page.TopPage>
        <Page.TopLine />
        <Page.BottomPage>
          <Page.ActionButtonPosition>
            <AddButton className="Hover">
              <span>
                <FaIcons.FaPlusCircle />
              </span>
              <p>Agregar curso</p>
            </AddButton>
          </Page.ActionButtonPosition>
        </Page.BottomPage>
      </Page.Page>
    </Divs.Pagecontainer>
  );
};

export default Index;
