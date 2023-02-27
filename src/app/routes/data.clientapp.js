import Home from "@clientapp/Home";
import About from "@clientapp/About";

export default [
  {
    path: "/home",
    public: true,
    title: "cxStudio | Home",
    element: <Home />
  },
  {
    path: "/about",
    public: false,
    title: "cxStudio | About",
    element: <About />
  }
];