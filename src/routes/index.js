import authentication from "@routes/data/authentication";
import dashboard from "@routes/data/dashboard";
import clientapp from "@routes/data/clientapp";

export default {
  buildRoutes: (locale) => {
    let routeBuild = [...authentication, ...dashboard, ...clientapp];

    return routeBuild;
  },
};
