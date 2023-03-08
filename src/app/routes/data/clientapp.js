import Home from "@clientapp/home";
import About from "@clientapp/about";

export default [
  {
    path: "",
    public: true,
    title: "cxStudio | Home",
    element: <Home />
  },
  {
    path: "home",
    public: true,
    title: "cxStudio | Home",
    element: <Home />
  },
  {
    path: "about",
    public: false,
    title: "cxStudio | About",
    element: <About />
  }
];