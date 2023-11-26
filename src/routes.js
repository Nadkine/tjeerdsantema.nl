import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdPerson2,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import Portfolio from "views/admin/default";
import Personal from "views/admin/personal";

const routes = [
  {
    name: "Portfolio",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Portfolio,
  },
  {
    name: "Personal",
    layout: "/admin",
    path: "/personal",
    icon: <Icon as={MdPerson2} width='20px' height='20px' color='inherit' />,
    component: Personal,
  }
];

export default routes;
