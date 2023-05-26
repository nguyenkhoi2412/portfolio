import "./_layout.scss";
import defaultFavicon from "@assets/favicons/default/favicon.png";
import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Preloader from "@portfolio/Pre";
import Navbar from "@portfolio/Navbar";
import Footer from "@portfolio/Footer";
import ScrollToTop from "@portfolio/ScrollToTop";

const PortfolioLayout = ({ children }) => {
  dynamicFavicons();
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default PortfolioLayout;

const dynamicFavicons = () => {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "shortcut icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  link.href = defaultFavicon;
};
