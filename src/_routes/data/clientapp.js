import { Navigate } from "react-router-dom";
import { navigateLocation } from "../navigateLocation";
import { RequireLoggedIn, RequireAuth } from "@utils/requireAuth";

// project imports
// import Layout from "@clientapp/_layout";
// import SocialProfile from "@clientapp/socialProfile";
// ==============================|| MAIN ROUTING ||============================== //

const ClientAppRoutes = {
  // path: navigateLocation.CLIENT_APP.ASSET_PATH,
  // element: <Layout />,
  // children: [
  //   {
  //     path: navigateLocation.CLIENT_APP.ASSET_PATH,
  //     title: "Social profile 🤠",
  //     element: <SocialProfile />,
  //   },
  // ],
};

export default ClientAppRoutes;
