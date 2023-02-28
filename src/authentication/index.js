import { Helpers, storedExtension } from "@utils/helpers";
import storaged from "./storageHandler";

export const isAuth = () => {
  return isLoggedIn() && isVerified_2fa();
  //window.location.href = "/" + routes.CURRENT_MODULES() + "/login";
};

export const isLoggedIn = () => {
  return Helpers.checkIsNotNull(
    localStorage.getItem(storaged.DASHBOARD.CURRENT_USER)
  );
};

export const isVerified_2fa = () => {
  if (
    Helpers.checkIsNotNull(
      storedExtension.getCookie(storaged.DASHBOARD.VERIFIED_2FA)
    )
  ) {
    return (
      storedExtension.getCookie(storaged.DASHBOARD.VERIFIED_2FA) === "true"
    );
  }

  return false;
};
