import UtilsTypography from "@views/utilities/typography";
import Color from "@views/utilities/color";
import UtilsShadow from "@views/utilities/shadow";
import UtilsTablerIcons from "@views/utilities/tablerIcons";
import GenerateKey from "@views/utilities/generateKey";
import { navigateLocation } from "@routes/navigateLocation";

const UtilitiesRoutes = [
  {
    path: navigateLocation.UTILITIES.GENERATE_KEY,
    element: <GenerateKey title="Generate key 🤠" />,
  },
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
