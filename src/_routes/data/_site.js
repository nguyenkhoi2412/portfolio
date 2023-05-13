import { navigateLocation } from "../navigateLocation";
import { RequireAuth } from "@utils/requireAuth";

// account routing
import SiteList from "@dashboard/site/siteList";

const SiteRoutes = [
  {
    path: navigateLocation.SITE.LIST,
    title: "Site settings 🤠",
    element: (
      <RequireAuth redirectTo={navigateLocation.AUTH.SIGNIN}>
        <SiteList />
      </RequireAuth>
    ),
  },
];

export default SiteRoutes;
