import SignIn from "@views/authentication/signIn";
import SignUp from "@views/authentication/signUp";
import ForgotPassword from "@views/authentication/forgotPassword";
import { MODULES } from "@routes/_modules";
import { navigateLocation } from "./navigateLocation";

export default [
  {
    path: navigateLocation.AUTH.SIGNIN,
    public: true,
    title: "SignIn | cxStudio",
    element: <SignIn />,
  },
  {
    path: navigateLocation.AUTH.SIGNUP,
    public: true,
    title: "SignUp | cxStudio",
    element: <SignUp />,
  },
  {
    path: navigateLocation.AUTH.FORGOT_PASSWORD,
    public: true,
    title: "Forgot Password | cxStudio",
    element: <ForgotPassword />,
  },
];
