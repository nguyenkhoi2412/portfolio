export const MODULES = {
  PORTFOLIO: "portfolio",
  DASHBOARD: "dashboard",
};

export const CURRENT_MODULES = () => {
  const pathname = window.location.pathname;
  const routeName = pathname.split("/");
  return routeName[routeName[0] === "" ? 1 : 0].toLowerCase();
};
