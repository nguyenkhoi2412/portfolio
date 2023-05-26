import React from "react";
import { useRoutes } from "react-router-dom";
import { hookInstance } from "@utils/hookInstance";

// routes
import PortfolioRoutes from "./data/portfolio";

// import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //
export const BuildRoutes = () => {
  buildTitle();

  return useRoutes(RouteMaps());
};

export const RouteMaps = () => {
  return [PortfolioRoutes];
};

const buildTitle = () => {
  const currentLocation = hookInstance.useRouter();
  const { pathname } = currentLocation;

  React.useEffect(() => {
    let currentTitle = {
      title: 'No title???'
    };
    const currentRoute = RouteMaps().find((item) => {
      const { children } = item;
      if (!children) {
        return item.path === pathname;
      } else {
        currentTitle = children.find((child) => child.path === pathname);
      }
    });

    currentTitle = currentRoute?.title || currentTitle?.title;
    if (currentTitle) {
      document.title = currentTitle;
    }
  }, [currentLocation]);
};
