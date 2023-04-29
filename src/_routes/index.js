import { useRoutes } from "react-router-dom";

// routes
import AuthenticationRoutes from "./data/authentication";
import DashboardRoutes from "./data/dashboard";
import ClientAppRoutes from "./data/clientapp";
// import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([...AuthenticationRoutes, DashboardRoutes, ClientAppRoutes]);
}

// import authentication from "@routes/data/authentication";
// import dashboard from "@routes/data/dashboard";
// import clientapp from "@routes/data/clientapp";

// export default {
//   buildRoutes: (locale) => {
//     let routeBuild = [...authentication, ...dashboard, ...clientapp];

//     return routeBuild;
//   },
// };
