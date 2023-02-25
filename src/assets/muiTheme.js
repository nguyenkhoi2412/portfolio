import { createTheme } from "@mui/material/styles";
import muiPallete from './muiPallete.scss'

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: muiPallete.primary,
    },
    secondary: {
      main: muiPallete.secondary,
    },
  }
})