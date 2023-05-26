import SignIn from "@authentication/signIn";
import SignUp from "@authentication/signUp";
import ForgotPassword from "@authentication/forgotPassword";
import CodeVerification from "@authentication/codeVerification";
import { navigateLocation } from "../navigateLocation";
import { RequireLoggedIn, RequireAuth } from "@utils/requireAuth";

const AuthenticationRoutes = [
  // {
  //   path: navigateLocation.CLIENT_APP.ASSET_PATH,
  //   title: "SignIn 🤠",
  //   element: (
  //     <RequireAuth
  //       redirectTo={navigateLocation.DASHBOARD.DEFAULT}
  //       isAuthentication={true}
  //     >
  //       <SignIn />,
  //     </RequireAuth>
  //   ),
  // },
  {
    path: navigateLocation.AUTH.SIGNIN,
    title: "SignIn 🤠",
    element: (
      <RequireAuth
        redirectTo={navigateLocation.DASHBOARD.DEFAULT}
        isAuthentication={true}
      >
        <SignIn />,
      </RequireAuth>
    ),
  },
  {
    path: navigateLocation.AUTH.SIGNUP,
    title: "SignUp 🤠",
    element: <SignUp />,
  },
  {
    path: navigateLocation.AUTH.FORGOT_PASSWORD,
    title: "Forgot Password 🤠",
    element: <ForgotPassword />,
  },
  {
    path: navigateLocation.AUTH.CODE_VERIFICATION,
    title: "Code verification 🤠",
    element: (
      <RequireLoggedIn
        redirectTo={navigateLocation.AUTH.SIGNIN}
        navigateTo={navigateLocation.DASHBOARD.DEFAULT}
      >
        <CodeVerification />,
      </RequireLoggedIn>
    ),
  },
];

export default AuthenticationRoutes;
