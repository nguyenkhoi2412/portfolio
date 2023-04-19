import SignIn from "@authentication/signIn";
import SignUp from "@authentication/signUp";
import ForgotPassword from "@authentication/forgotPassword";
import { navigateLocation } from "../navigateLocation";
import CodeVerification from "@authentication/codeVerification";
import { RequireLoggedIn } from "@utils/requireAuth";

const AuthenticationRoutes = [
  {
    path: navigateLocation.CLIENTAPP.ASSET_PATH,
    title: "SignIn 🤠",
    element: <SignIn title="SignIn 🤠" />,
  },
  {
    path: navigateLocation.AUTH.SIGNIN,
    title: "SignIn 🤠",
    element: <SignIn title="SignIn 🤠" />,
  },
  {
    path: navigateLocation.AUTH.SIGNUP,
    element: <SignUp title="SignUp 🤠" />,
  },
  {
    path: navigateLocation.AUTH.FORGOT_PASSWORD,
    element: <ForgotPassword title="Forgot Password 🤠" />,
  },
  {
    path: navigateLocation.AUTH.CODE_VERIFICATION,
    element: (
      <RequireLoggedIn redirectTo={navigateLocation.AUTH.SIGNIN}>
        <CodeVerification title="Code verification 🤠" />,
      </RequireLoggedIn>
    ),
  },
];

export default AuthenticationRoutes;

// export default [
//   {
//     path: navigateLocation.AUTH.SIGNIN,
//     public: true,
//     title: "SignIn 🤠",
//     element: <SignIn />,
//   },
//   {
//     path: navigateLocation.AUTH.SIGNUP,
//     public: true,
//     title: "SignUp 🤠",
//     element: <SignUp />,
//   },
//   {
//     path: navigateLocation.AUTH.FORGOT_PASSWORD,
//     public: true,
//     title: "Forgot Password 🤠",
//     element: <ForgotPassword />,
//   },
// ];
