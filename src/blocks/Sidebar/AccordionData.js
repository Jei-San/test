import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import { ImCog } from "react-icons/im";
import { ILAccordion } from "./UnorderedList";

export const AccordionData = [
  {
    index: 1,
    icon: <IoIcons.IoMdArchive />,
    text: "Contenido",
    options: (
      <ul>
        <ILAccordion>Eventos</ILAccordion>
        <ILAccordion>Cursos</ILAccordion>
        <ILAccordion>Categorias</ILAccordion>
        <ILAccordion>Videos</ILAccordion>
        <ILAccordion>Instructores</ILAccordion>
      </ul>
    ),
  },
  {
    index: 2,
    icon: <FaIcons.FaDollarSign />,
    text: "Marketing",
    options: (
      <ul>
        <ILAccordion>Ofertas/Paquetes</ILAccordion>
        <ILAccordion>Paginas de destino</ILAccordion>
        <ILAccordion>Formularios</ILAccordion>
        <ILAccordion>Templates de correo</ILAccordion>
        <ILAccordion>Automatizaciones</ILAccordion>
      </ul>
    ),
  },
  {
    index: 3,
    icon: <ImCog />,
    text: "Administrador",
    options: (
      <ul>
        <ILAccordion>Mis sitios</ILAccordion>
        <ILAccordion>Configuracion</ILAccordion>
        <ILAccordion>Colaboradores</ILAccordion>
      </ul>
    ),
  },
];
