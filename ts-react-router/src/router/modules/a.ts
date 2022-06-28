import { Layout } from "../../components/Layout";
import { A } from "../../pages";

export const routes = [
  {
    path: "/a",
    name: "A",
    component: A,
    layout: Layout,
    authRequired: true,
  },
];

export default routes;
