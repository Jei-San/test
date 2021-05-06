import React from "react";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { NavLinkSidebar } from "./SidebarLinks";

export const SidebarDataLinks = [
  {
    title: "Estadisticas",
    path: "/",
    icon: <AiIcons.AiFillHome className={NavLinkSidebar} />,
  },
  {
    title: "Contactos",
    path: "/",
    icon: <BsIcons.BsPeopleFill className={NavLinkSidebar} />,
  },
  {
    title: "Paginas del sitio",
    path: "/",
    icon: <IoIcons.IoMdToday className={NavLinkSidebar} />,
  },
];
