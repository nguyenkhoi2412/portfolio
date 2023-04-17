import SignIn from "@views/authentication/signIn";
import SignUp from "@views/authentication/signUp";
import ForgotPassword from "@views/authentication/forgotPassword";
import { navigateLocation } from "../navigateLocation";
import CodeVerification from "@views/authentication/codeVerification";

const AuthenticationRoutes = [
  {
    path: navigateLocation.AUTH.SIGNIN,
    title: "SignIn | cxStudio",
    element: <SignIn title="SignIn | cxStudio" />,
  },
  {
    path: navigateLocation.AUTH.SIGNUP,
    element: <SignUp title="SignUp | cxStudio" />,
  },
  {
    path: navigateLocation.AUTH.FORGOT_PASSWORD,
    element: <ForgotPassword title="Forgot Password | cxStudio" />,
  },
  {
    path: navigateLocation.AUTH.CODE_VERIFICATION,
    element: <CodeVerification title="Code verification | cxStudio" />,
  },
];

export default AuthenticationRoutes;

// export default [
//   {
//     path: navigateLocation.AUTH.SIGNIN,
//     public: true,
//     title: "SignIn | cxStudio",
//     element: <SignIn />,
//   },
//   {
//     path: navigateLocation.AUTH.SIGNUP,
//     public: true,
//     title: "SignUp | cxStudio",
//     element: <SignUp />,
//   },
//   {
//     path: navigateLocation.AUTH.FORGOT_PASSWORD,
//     public: true,
//     title: "Forgot Password | cxStudio",
//     element: <ForgotPassword />,
//   },
// ];
