import { MODULES } from "./_modules";
import vars from "@constants/variables";

const ASSET_PATH = vars.ASSET_PATH;
const DASHBOARD = ASSET_PATH + MODULES.DASHBOARD;
const AUTH = DASHBOARD + "/auth";
const ACCOUNT = DASHBOARD + "/account";
const UTILITIES = DASHBOARD + "/utilities";

export const navigateLocation = {
  DASHBOARD: {
    DEFAULT: DASHBOARD,
  },
  AUTH: {
    SIGNIN: AUTH + "/signin",
    SIGNUP: AUTH + "/signup",
    FORGOT_PASSWORD: AUTH + "/forgotpassword",
    CODE_VERIFICATION: AUTH + "/codeverification",
  },
  ACCOUNT: {
    PROFILE: ACCOUNT + "/profile",
    DETAILS: ACCOUNT + "/details",
    CHANGE_PASSOWRD: ACCOUNT + "/changepassword",
    CREATE_NEW: ACCOUNT + "/createnew",
    USER_LIST: ACCOUNT + "/userlist",
  },
  UTILITIES: {
    GENERATE_KEY: UTILITIES + "/generatekey",
    TYPOGRAPHY: UTILITIES + "/typography",
    COLOR: UTILITIES + "/color",
    SHADOW: UTILITIES + "/shadow",
    TABLERICONS: UTILITIES + "/tablericons",
  },
  CLIENTAPP: {
    ASSET_PATH: ASSET_PATH,
    HOME: ASSET_PATH + "/home",
  },
};
