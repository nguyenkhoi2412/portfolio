import { Navigate } from "react-router-dom";
import { navigateLocation } from "../navigateLocation";
import { RequireLoggedIn, RequireAuth } from "@utils/requireAuth";

// project imports
import DashboardLayout from "@dashboard/_layout";

// account routing
import AccountProfile from "@dashboard/account/profile";
import AccountInfo from "@dashboard/account/info";
import ChangePassword from "@dashboard/account/changePassword";
import ResetPassword from "@dashboard/account/resetPassword";
import CreateNew from "@dashboard/account/createNew";

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
      path: navigateLocation.ACCOUNT.PROFILE,
      element: (
        <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
          <AccountProfile title="Account profile 🤠" />
        </RequireAuth>
      ),
    },
    {
      path: navigateLocation.ACCOUNT.INFO,
      element: (
        <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
          <AccountInfo title="Account info 🤠" />
        </RequireAuth>
      ),
    },
    {
      path: navigateLocation.ACCOUNT.CHANGE_PASSOWRD,
      element: (
        <RequireAuth redirectTo={navigateLocation.ACCOUNT.CHANGE_PASSOWRD}>
          <ChangePassword title="Change password 🤠" />
        </RequireAuth>
      ),
    },
    {
      path: navigateLocation.ACCOUNT.RESET_PASSWORD,
      element: (
        <RequireAuth redirectTo={navigateLocation.ACCOUNT.RESET_PASSWORD}>
          <ResetPassword title="Reset password 🤠" />
        </RequireAuth>
      ),
    },
    {
      path: navigateLocation.ACCOUNT.CREATE_NEW,
      element: (
        <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
          <CreateNew title="Create new 🤠" />
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
// import DashboardLayout from "@dashboard/_layout";

// export default [
//   {
//     path: MODULES.DASHBOARD,
//     public: true,
//     title: "Dashboard | cxStudio",
//     element: <DashboardLayout />,
//   },
// ];
