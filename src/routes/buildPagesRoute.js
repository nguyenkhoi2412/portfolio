import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import vars from "@constants/variables";
import PrivateRoute from "./privateRoute";
import Home from "@clientapp/Home";
import NavigationScroll from "@utils/layout/navigationScroll";
// import { isAuth } from "../../authentication";
import { useSelector } from "react-redux";
// import { siteState } from "@providers/site.reducer";

const BuildPagesRoute = (props) => {
  const [dataSource, setDataSource] = React.useState();

  const location = useLocation();
  React.useEffect(() => {
    let currentPath = props.dataSource.find(
      (item) => vars.ASSET_PATH + item.path === location.pathname
    );
    document.title = currentPath?.title ?? "No title";
  }, [location]);

  React.useEffect(() => {
    setDataSource(props.dataSource);
  }, [props.dataSource]);

  return (
    <NavigationScroll>
      <Routes path="/">
        <Route index element={<Home />} />
        {dataSource?.map((route, index) => {
          var { path, title, element } = route;

          switch (route.public) {
            case true:
              return (
                <Route
                  key={index}
                  path={path}
                  title={title}
                  element={element}
                />
              );

            case false:
              return (
                <Route
                  key={index}
                  path={path}
                  title={title}
                  element={
                    <PrivateRoute isAuth={false} redirectPath="/">
                      {element}
                    </PrivateRoute>
                  }
                ></Route>
              );
          }
        })}
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </NavigationScroll>
  );
};

export default React.memo(BuildPagesRoute, (props, nextProps) => {
  if (props.dataSource === nextProps.dataSource) {
    // return true if you don't need re-render
    return true;
  }
});
