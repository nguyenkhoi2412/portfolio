import color from "./palette.module.scss";
import { createTheme } from "@mui/material/styles";
import componentStyleOverrides from "./compStyleOverride";
import themePalette from "./themePalette";
import themeTypography from "./typography";

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const configBaseTheme = (customization) => {
  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.primaryDark,
    menuSelectedBack: color.primaryLight,
    divider: color.grey200,
    customization,
  };

  const themes = createTheme({
    direction: "ltr",
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: "48px",
        padding: "16px",
        "@media (min-width: 600px)": {
          minHeight: "48px",
        },
      },
    },
    typography: themeTypography(themeOption),
    // palette: {
    //   primary: {
    //     main: themePalette.primary.main,
    //   },
    //   secondary: {
    //     main: themePalette.secondary.main,
    //   },
    //   breakpoints: {
    //     values: {
    //       xs: palette.breakpointsXs, // 0,
    //       sm: palette.breakpointsSm, // 600,
    //       md: palette.breakpointsMd, // 900,
    //       lg: palette.breakpointsLg, // 1200,
    //       xl: palette.breakpointsXl, // 1536,
    //       mobile: palette.breakpointsMobile, // 0,
    //       tablet: palette.breakpointsTablet, // 640,
    //       laptop: palette.breakpointsLaptop, // 1024,
    //       desktop: palette.breakpointsDesktop, // 1200,
    //     },
    //   },
    // },
  });
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};
