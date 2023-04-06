import SignIn from "@views/authentication/signIn";
import SignUp from "@views/authentication/signUp";
import { MODULES } from "@routes/_modules";

export default [
  {
    path: MODULES.DASHBOARD + "/signin",
    public: true,
    title: "SignIn | cxStudio",
    element: <SignIn />,
  },
  {
    path: MODULES.DASHBOARD + "/signup",
    public: true,
    title: "SignUp | cxStudio",
    element: <SignUp />,
  },
];
