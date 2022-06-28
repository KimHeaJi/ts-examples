import { Layout } from "../../components/Layout";
import { B } from "../../pages";

export const routes = [
  {
    path: "/b",
    name: "B",
    component: B,
    layout: Layout,
    authRequired: true,
  },
];

export default routes;
