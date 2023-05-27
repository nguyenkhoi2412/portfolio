import { navigateLocation } from "../navigateLocation";

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
      title: "Portfolio",
      element: <Home />,
    },
    {
      path: navigateLocation.PORTFOLIO.PORTFOLIO,
      title: "Portfolio",
      element: <Home />,
    },
    {
      path: navigateLocation.PORTFOLIO.ABOUT,
      title: "About | Portfolio",
      element: <About />,
    },
    {
      path: navigateLocation.PORTFOLIO.PROJECTS,
      title: "Work Experience | Portfolio",
      element: <Projects />,
    },
    {
      path: navigateLocation.PORTFOLIO.CURRICULUM_VITAE,
      title: "Curriculum vitae | Portfolio",
      element: <CurriculumVitae />,
    },
  ],
};

export default PortfolioRoutes;
