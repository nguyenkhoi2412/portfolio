import pallete from "./pallete.module.scss";
import { createTheme } from "@mui/material/styles";

export const configBaseTheme = createTheme({
  palette: {
    primary: {
      main: pallete.primaryColor,
    },
    secondary: {
      main: pallete.secondaryColor,
    },
  },
});
