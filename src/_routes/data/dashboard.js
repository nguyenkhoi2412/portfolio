import { Navigate } from "react-router-dom";
import { navigateLocation } from "../navigateLocation";
import SignIn from "@authentication/signIn";
import SignUp from "@authentication/signUp";
import ForgotPassword from "@authentication/forgotPassword";
import CodeVerification from "@authentication/codeVerification";
import { RequireLoggedIn, RequireAuth } from "@utils/requireAuth";

// project imports
import DashboardLayout from "@dashboard/layout";

// dashboard routing
import DashboardDefault from "@dashboard/default";

// // utilities routing
// const UtilsTypography = Loadable(
//   lazy(() => import("views/utilities/Typography"))
// );
// const UtilsColor = Loadable(lazy(() => import("views/utilities/Color")));
// const UtilsShadow = Loadable(lazy(() => import("views/utilities/Shadow")));
// const UtilsMaterialIcons = Loadable(
//   lazy(() => import("views/utilities/MaterialIcons"))
// );
// const UtilsTablerIcons = Loadable(
//   lazy(() => import("views/utilities/TablerIcons"))
// );

// // sample page routing
// const SamplePage = Loadable(lazy(() => import("views/sample-page")));
// ==============================|| MAIN ROUTING ||============================== //

const DashboardRoutes = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      path: navigateLocation.DASHBOARD.DEFAULT,
      element: (
        <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
          <DashboardDefault title="Dashboard 🤠" />
        </RequireAuth>
      ),
    },
    // {
    //   path: "utils",
    //   children: [
    //     {
    //       path: "util-typography",
    //       element: <UtilsTypography />,
    //     },
    //   ],
    // },
    // {
    //   path: "utils",
    //   children: [
    //     {
    //       path: "util-color",
    //       element: <UtilsColor />,
    //     },
    //   ],
    // },
    // {
    //   path: "utils",
    //   children: [
    //     {
    //       path: "util-shadow",
    //       element: <UtilsShadow />,
    //     },
    //   ],
    // },
    // {
    //   path: "icons",
    //   children: [
    //     {
    //       path: "tabler-icons",
    //       element: <UtilsTablerIcons />,
    //     },
    //   ],
    // },
    // {
    //   path: "icons",
    //   children: [
    //     {
    //       path: "material-icons",
    //       element: <UtilsMaterialIcons />,
    //     },
    //   ],
    // },
    // {
    //   path: "sample-page",
    //   element: <SamplePage />,
    // },
  ],
};

export default DashboardRoutes;

// import { MODULES } from "@routes/_modules";
// import DashboardLayout from "@dashboard/layout";

// export default [
//   {
//     path: MODULES.DASHBOARD,
//     public: true,
//     title: "Dashboard | cxStudio",
//     element: <DashboardLayout />,
//   },
// ];
