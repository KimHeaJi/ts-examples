import React from "react";
import { Layout } from "../components/Layout";
import { Main } from "../pages";

import { default as modules } from "./modules";

interface IRoute {
  path: string;
  name: string;
  component: React.FC;
  layout: React.FC<any>;
  authRequired: Boolean;
}

const routes: Array<IRoute> = [
  {
    path: "/",
    name: "Index",
    component: Main,
    layout: Layout,
    authRequired: true,
  },
  ...modules,
];

export default routes;
