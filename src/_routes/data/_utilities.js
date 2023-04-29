import UtilsTypography from "@views/utilities/Typography";
import Color from "@views/utilities/Color";
import UtilsShadow from "@views/utilities/Shadow";
import UtilsTablerIcons from "@views/utilities/TablerIcons";
import { navigateLocation } from "@routes/navigateLocation";

const UtilitiesRoutes = [
  {
    path: navigateLocation.UTILITIES.TYPOGRAPHY,
    element: <UtilsTypography title="Typography 🤠" />,
  },
  {
    path: navigateLocation.UTILITIES.COLOR,
    element: <Color title="Color 🤠" />,
  },
  {
    path: navigateLocation.UTILITIES.SHADOW,
    element: <UtilsShadow title="Shadow 🤠" />,
  },
  {
    path: navigateLocation.UTILITIES.TABLERICONS,
    element: <UtilsTablerIcons title="Tabler icons react 🤠" />,
  },
];

export default UtilitiesRoutes;
