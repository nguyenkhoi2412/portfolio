import { Navigate } from "react-router-dom";
import { navigateLocation } from "../navigateLocation";
import { RequireLoggedIn, RequireAuth } from "@utils/requireAuth";

// project imports
import DashboardLayout from "@dashboard/_layout";

// account routing
import AccountProfile from "@dashboard/account/profile";
import AccountInfo from "@dashboard/account/info";
import ChangePassword from "@dashboard/account/changePassword";
import CreateNew from "@dashboard/account/createNew";

// dashboard routing
import DashboardDefault from "@dashboard/default";

const AccountRoutes = [
  {
    path: navigateLocation.ACCOUNT.PROFILE,
    title: "Account profiles 🤠",
    element: (
      <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
        <AccountProfile />
      </RequireAuth>
    ),
  },
  {
    path: navigateLocation.ACCOUNT.INFO,
    title: "Account info 🤠",
    element: (
      <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
        <AccountInfo />
      </RequireAuth>
    ),
  },
  {
    path: navigateLocation.ACCOUNT.CHANGE_PASSOWRD,
    title:"Change password 🤠",
    element: (
      <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
        <ChangePassword />
      </RequireAuth>
    ),
  },
  {
    path: navigateLocation.ACCOUNT.CREATE_NEW,
    title:"Create new 🤠",
    element: (
      <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
        <CreateNew />
      </RequireAuth>
    ),
  },
];

export default AccountRoutes;
