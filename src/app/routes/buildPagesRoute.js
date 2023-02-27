import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from "@app/routes";
import PrivateRoute from './privateRoute';
import Home from "@clientapp/Home";
import About from "@clientapp/About";
// import { isAuth } from "../../authentication";
import { useSelector } from 'react-redux';
// import { siteState } from "@providers/site.reducer";

const BuildPagesRoute = (props) => {
  const [dataSource, setDataSource] = React.useState()
  // const siteSelector = useSelector(siteState);
  const module = routes.CURRENT_MODULES();

  React.useEffect(() => {
    setDataSource(props.dataSource)
  }, [props.dataSource])

  return (
    <>
      <Routes path="/">
        <Route index element={<Home />} />
          {
            dataSource?.map((route, index) => {
              let _path = route.path;
              let _element = route.element;

              switch(route.public)
              {
                case true:
                  return (
                    <Route
                      key={index}
                      path={_path}
                      element={_element} />
                  )

                  case false:
                    return (
                      <Route
                        key={index}
                        path={_path}
                        element={
                          <PrivateRoute isAuth={false} redirectPath='/'>
                            {_element}
                          </PrivateRoute>
                        }>
                        </Route>
                    )
              }
            })
          }
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  )
};

export default React.memo(BuildPagesRoute, (props, nextProps) => {
  if(props.dataSource === nextProps.dataSource) {
    // return true if you don't need re-render
    return true
  }
})
