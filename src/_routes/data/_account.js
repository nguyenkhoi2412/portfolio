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

export const AccountRoutes = [
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
      <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
        <ChangePassword title="Change password 🤠" />
      </RequireAuth>
    ),
  },
  {
    path: navigateLocation.ACCOUNT.RESET_PASSWORD,
    element: (
      <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
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
];
