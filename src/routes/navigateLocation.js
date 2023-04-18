import { MODULES } from "./_modules";
import vars from "@constants/variables";

const ASSET_PATH = vars.ASSET_PATH;
const DASHBOARD = ASSET_PATH + MODULES.DASHBOARD;
const AUTH = DASHBOARD + "/auth";

export const navigateLocation = {
  DASHBOARD: DASHBOARD,
  AUTH: {
    SIGNIN: AUTH + "/signin",
    SIGNUP: AUTH + "/signup",
    FORGOT_PASSWORD: AUTH + "/forgotpassword",
    CODE_VERIFICATION: AUTH + "/codeverification",
  },
  CLIENTAPP: {
    ASSET_PATH: ASSET_PATH,
    HOME: ASSET_PATH + "/home",
  },
};
