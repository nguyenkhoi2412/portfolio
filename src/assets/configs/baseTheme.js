import pallete from "./pallete.module.scss";
import { createTheme } from "@mui/material/styles";

export const configBaseTheme = createTheme({
  palette: {
    primary: {
      main: pallete.secondaryMain,
    },
    secondary: {
      main: pallete.primaryMain,
    },
    breakpoints: {
      values: {
        xs: pallete.breakpointsXs, // 0,
        sm: pallete.breakpointsSm, // 600,
        md: pallete.breakpointsMd, // 900,
        lg: pallete.breakpointsLg, // 1200,
        xl: pallete.breakpointsXl, // 1536,
        mobile: pallete.breakpointsMobile, // 0,
        tablet: pallete.breakpointsTablet, // 640,
        laptop: pallete.breakpointsLaptop, // 1024,
        desktop: pallete.breakpointsDesktop, // 1200,
      },
    },
  },
});
