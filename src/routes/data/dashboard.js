import { Navigate } from "react-router-dom";
import { navigateLocation } from "../navigateLocation";

// project imports
import DashboardLayout from "@views/dashboard/layout";

// dashboard routing
import DashboardDefault from "@views/dashboard/default";

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

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

// ==============================|| MAIN ROUTING ||============================== //

const DashboardRoutes = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      path: navigateLocation.DASHBOARD,
      element: (
        <RequireAuth redirectTo={"/"}>
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
// import DashboardLayout from "@views/dashboard/layout";

// export default [
//   {
//     path: MODULES.DASHBOARD,
//     public: true,
//     title: "Dashboard | cxStudio",
//     element: <DashboardLayout />,
//   },
// ];
