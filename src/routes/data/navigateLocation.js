import { MODULES } from "../_modules";
import vars from "@constants/variables";

const ASSET_PATH = vars.ASSET_PATH;
const DASHBOARD = ASSET_PATH + MODULES.DASHBOARD;

export const navigateLocation = {
  DASHBOARD: DASHBOARD,
  AUTH: {
    SIGNIN: DASHBOARD + "/signin",
    SIGNUP: DASHBOARD + "/signup",
    FORGOT_PASSWORD: DASHBOARD + "/forgotpassword",
  },
  CLIENTAPP: {
    ASSET_PATH: ASSET_PATH,
    HOME: ASSET_PATH + "/home"
  }
};
