import { stringExtension } from "@utils/helpers";

// import GenerateKey from "@containers/GenerateKey";
import clientapp from "./data.clientapp";

// import DashboardSignIn from "@dashboard/containers/SignIn";
// import Secure2FA from "@dashboard/containers/Secure_2fa";
// import DashboardLayoutTemplate from "@dashboard/containers/RenderPages/LayoutTemplate";

const ASSET_PATH = process.env.ASSET_PATH || "/";

export default {
  MODULES: {
    DASHBOARD: "dashboard",
    SURVEY: "survey",
  },
  CURRENT_MODULES: () => {
    const pathname = window.location.pathname;
    const routeName = pathname.split("/");

    return routeName[routeName[0] === "" ? 1 : 0].toLowerCase();
  },
  buildRoutes: (locale) => {
    const components = {
      // generatesecretkey: <GenerateKey />,
      // home: <Home />,
      // about: <About />,
      // "dashboard/login": <DashboardSignIn />,
      // "dashboard/secure_2fa": <Secure2FA />,
      // "dashboard/layouttemplate": <DashboardLayoutTemplate />,
    };

    let routeBuild = [
      // {
      //   path: ASSET_PATH + "generate/secretkey",
      //   exact: true,
      //   public: true,
      //   title: "Generate SecretKey",
      //   children: components["generatesecretkey"],
      // },
      ...clientapp
    ];

    // routes.map((r) => {
    //   const rt = { ...r };

    //   routeBuild.push({
    //     path: ASSET_PATH + rt.path,
    //     exact: rt.axact,
    //     public: rt.public,
    //     title: stringExtension.render(rt.title, locale.lang),
    //     children: components[rt.component.toLowerCase()],
    //   });
    // });

    return routeBuild;
  },
};
