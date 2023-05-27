import { useContext } from "react";
import { ThemeContext } from "./themeContextProvider";

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
