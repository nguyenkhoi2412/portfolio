import Home from "@clientapp/Home";
import About from "@clientapp/About";

export default [
  {
    path: "",
    public: true,
    title: "Home | cxStudio",
    element: <Home />
  },
  {
    path: "home",
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