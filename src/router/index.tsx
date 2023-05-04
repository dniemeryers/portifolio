import { createBrowserRouter } from "react-router-dom";

import {Home} from "../page/Home/Home";
import {Sobre} from "../page/sobre/Sobre";
import {Educacao} from "../page/educação/Educação";
import {Projetos} from "../page/projetos/Projetos";
import {Experiencias} from "../page/experiencia/Experiencia";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/home",
    element: <Home />,
  },{
    path: "/sobre",
    element: <Sobre/>,
  },{
    path: "/#sobre",
    element: <Sobre/>,
  },{
    path: "/educacao",
    element: <Educacao/>,
  },{
    path: "/projetos",
    element: <Projetos/>,
  },{
    path: "/experiencia",
    element: <Experiencias/>,
  },

]);

export default router;