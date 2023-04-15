import { navigateLocation } from "./navigateLocation";
import Home from "@clientapp/Home";
import About from "@clientapp/About";

export default [
  {
    path: navigateLocation.CLIENTAPP.ASSET_PATH,
    public: true,
    title: "Home | cxStudio",
    element: <Home />
  },
  {
    path: navigateLocation.CLIENTAPP.HOME,
    public: true,
    title: "Home | cxStudio",
    element: <Home />
  },
  {
    path: "about",
    public: false,
    title: "About | cxStudio",
    element: <About />
  }
];