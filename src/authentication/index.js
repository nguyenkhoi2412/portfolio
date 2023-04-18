import { helpersExtension, storedExtension } from "@utils/helpersExtension";
import storaged from "@constants/storageHandler";

export const isAuth = () => {
  return isLoggedIn() && isVerified_2fa();
  //window.location.href = "/" + routes.CURRENT_MODULES() + "/login";
};

export const isLoggedIn = () => {
  return helpersExtension.checkIsNotNull(
    localStorage.getItem(storaged.DASHBOARD.CURRENT_USER)
  );
};

export const isVerified_2fa = () => {
  if (
    helpersExtension.checkIsNotNull(
      storedExtension.getCookie(storaged.DASHBOARD.VERIFIED_2FA)
    )
  ) {
    return (
      storedExtension.getCookie(storaged.DASHBOARD.VERIFIED_2FA) === "true"
    );
  }

  return false;
};
