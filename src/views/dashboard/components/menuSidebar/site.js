import { navigateLocation } from "@routes/navigateLocation";
// assets
import WebIcon from '@mui/icons-material/Web';

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const site = {
  id: "site",
  title: "Site settings",
  type: "group",
  children: [
    {
      id: "default",
      title: "Site settings",
      type: "item",
      url: navigateLocation.SITE.LIST,
      icon: WebIcon,
      breadcrumbs: false,
    },
  ],
};

export default site;
