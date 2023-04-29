import { useRoutes } from "react-router-dom";

// routes
import AuthenticationRoutes from "./data/authentication";
import DashboardRoutes from "./data/dashboard";
import ClientAppRoutes from "./data/clientapp";
// import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    ...AuthenticationRoutes,
    DashboardRoutes,
    ClientAppRoutes,
  ]);
}
