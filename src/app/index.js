import "./app.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import defaultFavicon from "@assets/favicons/default/favicon.ico";
import { SnackbarProvider } from "notistack";
import { Routes } from "@routes";
import NavigationScroll from "@utils/_layout/navigationScroll";
import { ThemeProvider } from "@mui/system";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { configBaseTheme } from "@assets/themes/_baseTheme";
//#region useHooks,components, helper
import IncBackdrop from "@components/mui-ui/backdropSpin";
import IncProgressBar from "@components/mui-ui/progressBar";
//#endregion
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { helpersExtension } from "@utils/helpersExtension";

const App = (props) => {
  console.warn = () => {};
  dynamicFavicons();

  const customization = useSelector((state) => state.customization);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  // const site = useSelector(siteState);
  // const locale = useSelector(localeState);
  // const [renderRoutes, setRenderRoutes] = React.useState(routes.buildRoutes());
  const [deviceInfos, setDeviceInfos] = React.useState({
    mobile: false,
    responsive: false,
  });

  const handleResize = helpersExtension.debounce(() => {
    setDeviceInfos(helpersExtension.detectEnvironment());
  }, 10);

  //#region useEffect
  //* GET SITE INFO
  React.useEffect(() => {
    i18n.changeLanguage("en-US");
    handleResize();
  }, []);
  //#endregion

  //* window resize
  $(window)
    .off("resize.handleResize")
    .on("resize.handleResize", function () {
      handleResize();
    });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={configBaseTheme(customization)}>
        <CssBaseline />
        <BrowserRouter>
          <IncProgressBar />
          <IncBackdrop />
          <SnackbarProvider
            maxSnack={3}
            autoHideDuration={3000}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Grid
              container
              component="main"
              direction="column"
              sx={{ minHeight: "100vh", height: "100%", width: "100%" }}
            >
              {/* <BuildPagesRoute dataSource={renderRoutes} /> */}
              <NavigationScroll>
                <Routes />
              </NavigationScroll>
            </Grid>
          </SnackbarProvider>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
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
  link.href = defaultFavicon;
};
