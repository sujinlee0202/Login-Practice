import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

interface RouterElement {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
}

const routerData: RouterElement[] = [
  {
    id: 0,
    path: "/",
    label: "Home",
    element: <Home />,
  },
  {
    id: 1,
    path: "/login",
    label: "Login",
    element: <Login />,
  },
  {
    id: 2,
    path: "/PageA",
    label: "PageA",
    element: <PageA />,
  },
  {
    id: 3,
    path: "/PageB",
    label: "PageB",
    element: <PageB />,
  },
  {
    id: 4,
    path: "/PageC",
    label: "PageC",
    element: <PageC />,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: router.element,
    };
  })
);
