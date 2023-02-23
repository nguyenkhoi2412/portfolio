// import "./app.less";
import React from "react";
import { useTranslation } from "react-i18next";
import defaultFavicon from "@assets/favicons/default/favicon.ico";
// // import cmsFavicon from "@assets/favicons/dashboard/favicon.ico";
// import surveyFavicon from "@assets/favicons/survey/favicon.ico";
import { BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import PagesRoute from "./routes/PagesRoute";
import routes from "@app/routes";
//#region useHooks,components, helper
// import BackdropSpin from "@components/common/BackdropSpin";
// import Loading from "@components/common/Loading";
// import ProgressBar from "@components/common/ProgressBar";
// import SnackbarmaUI from "@components/common/Snackbar";
// import Linear from "@components/common/Linear";
//#endregion
import { useDispatch, useSelector } from "react-redux";
// import {
//   SITE_GET_BY_NAME,
//   siteState,
//   localeState,
// } from "@providers/site.reducer";
// import { TYPE_GET_BY_SITE } from "@providers/type.reducer";
// import { UPDATE_ENVIROMENT_INFOS } from "@providers/utils/shared.reducer";
import { Helpers } from "@utils/helpers";

const App = () => {
  console.warn = () => {};
  dynamicFavicons();

  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  // const site = useSelector(siteState);
  // const locale = useSelector(localeState);
  const [renderRoutes, setRenderRoutes] = React.useState([]);
  const [deviceInfos, setDeviceInfos] = React.useState({
    mobile: false,
    responsive: false,
  });

  const handleResize = Helpers.debounce(() => {
    // setDeviceInfos(Helpers.detectEnvironment());
  }, 10);

  //#region useEffect
  // //* GET SITE INFO
  // React.useEffect(() => {
  //   handleResize();
  //   dispatch(SITE_GET_BY_NAME());
  // }, []);

  // // React.useEffect(() => {
  // //   if (performance.navigation.type === 1) {
  // //     console.log("This page is reloaded");
  // //   } else {
  // //     console.log("This page is not reloaded");
  // //   }
  // //   window.onbeforeunload = null;
  // //   window.onbeforeunload = function () {
  // //     return true;
  // //   };

  // //   return () => {
  // //     window.onbeforeunload = null;
  // //   };
  // // });

  // //* GET TYPE BY SITE
  // React.useEffect(() => {
  //   if (Helpers.checkIsNotNull(site.d)) {
  //     dispatch(TYPE_GET_BY_SITE(site.d._id));

  //     // set language for i18n
  //     i18n.changeLanguage(locale.lang);
  //     setRenderRoutes(routes.buildRoutes(site.d, locale));
  //   }
  // }, [site.d]);

  // React.useEffect(() => {
  //   dispatch(UPDATE_ENVIROMENT_INFOS(deviceInfos));
  // }, [deviceInfos]);
  //#endregion

  //* window resize
  $(window)
    .off("resize.handleResize")
    .on("resize.handleResize", function () {
      handleResize();
    });

  return (
    <>
      {/* <ProgressBar />
      <BackdropSpin />
      <Loading /> */}
      <div>Welcome</div>
      {/* <Router basename={process.env.ASSET_PATH || "/"}>
        <Routes>
          <Navigate exact from="/" to="/home" />
          {renderRoutes.map((route, index) => (
            <PagesRoute key={index} {...route}>
              {route.children}
            </PagesRoute>
          ))}
        </Routes>
      </Router> */}
      {/** Snackbar show message results */}
      {/* <SnackbarmaUI /> */}
    </>
  );
};

export default App;

const dynamicFavicons = () => {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "shortcut icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }

  const { CURRENT_MODULES, MODULES } = routes;
  switch (CURRENT_MODULES()) {
    case MODULES.SURVEY:
      link.href = surveyFavicon;
      break;

    // case MODULES.DASHBOARD:
    //   link.href = cmsFavicon;
    //   break;

    default:
      link.href = defaultFavicon;
      break;
  }

  if (CURRENT_MODULES() !== "") {
    document.body.classList.add(CURRENT_MODULES());
  } else document.body.classList.add("home");
};
