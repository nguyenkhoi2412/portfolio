import { useMemo } from "react";
import "./_btnToggleTheme.scss";
import Button from "react-bootstrap/Button";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useThemeContext } from "@utils/themeHook";

const BtnToggleTheme = ({ className }) => {
  const { dark, toggleTheme } = useThemeContext();

  const ToggleThemeIcon = useMemo(
    () => (dark ? MdDarkMode : MdLightMode),
    [dark]
  );

  return (
    <Button className={className} onClick={toggleTheme} label="theme toggle">
      <ToggleThemeIcon className={`toggleTheme`} />
    </Button>
  );
};

export default BtnToggleTheme;
