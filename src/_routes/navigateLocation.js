import { MODULES } from "./_modules";
import vars from "@constants/variables";

const ASSET_PATH = vars.ASSET_PATH;
const DASHBOARD = ASSET_PATH + MODULES.DASHBOARD;
const AUTH = DASHBOARD + "/auth";
const ACCOUNT = DASHBOARD + "/account";

export const navigateLocation = {
  DASHBOARD: {
    DEFAULT: DASHBOARD,
  },
  AUTH: {
    SIGNIN: AUTH + "/signin",
    SIGNUP: AUTH + "/signup",
    FORGOT_PASSWORD: AUTH + "/forgotpassword",
    RESET_PASSWORD: AUTH + "/resetpassword",
    CODE_VERIFICATION: AUTH + "/codeverification",
  },
  ACCOUNT: {
    PROFILE: ACCOUNT + "/profile",
    INFO: ACCOUNT + "/info",
    CHANGE_PASSOWRD: ACCOUNT + "/changepassword",
    CREATE_NEW: ACCOUNT + "/createnew",
    RESET_PASSWORD: ACCOUNT + "/resetpassword",
  },
  CLIENTAPP: {
    ASSET_PATH: ASSET_PATH,
    HOME: ASSET_PATH + "/home",
  },
};
