import { navigateLocation } from "../navigateLocation";
import { RequireAuth } from "@utils/requireAuth";

// account routing
import AccountSocial from "@dashboard/account/social";
import AccountProfile from "@dashboard/account/profile";
import AccountDetails from "@dashboard/account/details";
import ChangePassword from "@dashboard/account/changePassword";
import CreateNew from "@dashboard/account/createNew";
import UserList from "@dashboard/account/userlist";

const AccountRoutes = [
  {
    path: navigateLocation.ACCOUNT.SOCIAL,
    title: "Social 🤠",
    element: (
      <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
        <AccountSocial />
      </RequireAuth>
    ),
  },
  {
    path: navigateLocation.ACCOUNT.PROFILE,
    title: "My profiles 🤠",
    element: (
      <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
        <AccountProfile />
      </RequireAuth>
    ),
  },
  {
    path: navigateLocation.ACCOUNT.SETTING,
    title: "Account setting 🤠",
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
  {
    path: navigateLocation.ACCOUNT.USER_LIST,
    title: "Userlist 🤠",
    element: (
      <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
        <UserList />
      </RequireAuth>
    ),
  },
];

export default AccountRoutes;
