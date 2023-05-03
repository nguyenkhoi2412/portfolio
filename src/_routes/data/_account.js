import { navigateLocation } from "../navigateLocation";
import { RequireAuth } from "@utils/requireAuth";

// account routing
import AccountProfile from "@dashboard/account/profile";
import AccountDetails from "@dashboard/account/details";
import ChangePassword from "@dashboard/account/changePassword";
import CreateNew from "@dashboard/account/createNew";

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
    path: navigateLocation.ACCOUNT.DETAILS,
    title: "Account details 🤠",
    element: (
      <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
        <AccountDetails />
      </RequireAuth>
    ),
  },
  {
    path: navigateLocation.ACCOUNT.CHANGE_PASSOWRD,
    title: "Change password 🤠",
    element: (
      <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
        <ChangePassword />
      </RequireAuth>
    ),
  },
  {
    path: navigateLocation.ACCOUNT.CREATE_NEW,
    title: "Create new 🤠",
    element: (
      <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
        <CreateNew />
      </RequireAuth>
    ),
  },
];

export default AccountRoutes;
