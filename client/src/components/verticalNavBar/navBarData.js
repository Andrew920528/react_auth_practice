import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { GoDashboard } from "react-icons/go";
import { AiOutlineTable } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoMdInformationCircleOutline } from "react-icons/io";
export const SidebarData = [
  {
    title: "Dashboard",
    path: "/reports",
    icon: <GoDashboard className="nav-icon" />,
    cName: "nav-item",
  },
  {
    title: "Main",
    path: "/reports",
    icon: <IoMdInformationCircleOutline className="nav-icon" />,
    cName: "nav-item",
  },
  {
    title: "Config Table",
    path: "/products",
    icon: <AiOutlineTable className="nav-icon" />,
    cName: "nav-item",
  },
  {
    title: "Reports",
    path: "/team",
    icon: <HiOutlineDocumentReport className="nav-icon" />,
    cName: "nav-item",
  },
];
