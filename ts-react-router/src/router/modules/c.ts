import { Layout } from "../../components/Layout";
import { C } from "../../pages";

export const routes = [
  {
    path: "/c",
    name: "C",
    component: C,
    layout: Layout,
    authRequired: true,
  },
];

export default routes;
