import SignIn from "@dashboard/signIn";
import SignUp from "@dashboard/signUp";
import { MODULES } from "@routes/_modules";

export default [
  {
    path: MODULES.DASHBOARD + "/signin",
    public: true,
    title: "SignIn | Dashboard | cxStudio",
    element: <SignIn />,
  },
  {
    path: MODULES.DASHBOARD + "/signup",
    public: true,
    title: "SignUp | Dashboard | cxStudio",
    element: <SignUp />,
  },
];
