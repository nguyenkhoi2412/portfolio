import { Route, Redirect } from "react-router-dom";
import routes from "@app/routes";
// import { isAuth } from "../../authentication";
import { useSelector } from "react-redux";
// import { siteState } from "@providers/site.reducer";

const PagesRoute = ({ children, ...rest }) => {
  // const siteSelector = useSelector(siteState);
  const module = routes.CURRENT_MODULES();

  React.useEffect(() => {
    // document.title = rest.title + " | " + siteSelector.d.name;
  }, [rest.title]);

  switch (rest.public) {
    case true:
      return <Route {...rest}>{children}</Route>;

    // default:
    //   if (!isAuth()) {
    //     window.location.href = "/" + module + "/login";
    //     return <></>;
    //   }

    //   return <Route {...rest}>{children}</Route>;
  }
};

export default PagesRoute;
