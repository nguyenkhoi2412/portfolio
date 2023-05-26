import { Navigate } from "react-router-dom";
import { navigateLocation } from "../navigateLocation";
import { RequireLoggedIn, RequireAuth } from "@utils/requireAuth";

// project imports
import PortfolioLayout from "@portfolio/_layout";
import Home from "@portfolio/home";
import About from "@portfolio/about";
import Projects from "@portfolio/projects";
import CurriculumVitae from "@portfolio/curriculum_vitae";
// ==============================|| MAIN ROUTING ||============================== //

const PortfolioRoutes = {
  path: navigateLocation.PORTFOLIO.ASSET_PATH,
  element: <PortfolioLayout />,
  children: [
    {
      path: navigateLocation.PORTFOLIO.HOME,
      title: "Khoi Nguyen | Portfolio",
      element: <Home />,
    },
    {
      path: navigateLocation.PORTFOLIO.PORTFOLIO,
      title: "Khoi Nguyen | Portfolio",
      element: <Home />,
    },
    {
      path: navigateLocation.PORTFOLIO.ABOUT,
      title: "Khoi Nguyen | Portfolio",
      element: <About />,
    },
    {
      path: navigateLocation.PORTFOLIO.PROJECTS,
      title: "Khoi Nguyen | Portfolio",
      element: <Projects />,
    },
    {
      path: navigateLocation.PORTFOLIO.CURRICULUM_VITAE,
      title: "Khoi Nguyen | Portfolio",
      element: <CurriculumVitae />,
    },
  ],
};

export default PortfolioRoutes;
