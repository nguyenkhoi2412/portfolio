import * as React from "react";
//#region utils support
import { useTranslation } from "react-i18next";
import { hooksInstance } from "@utils/hooksInstance";
//#endregion

// material-ui
import { Box, Card, Grid } from "@mui/material";

//#region components
import AuthChangePassword from "@authentication/changepassword";
//#endregion

const ChangePassword = (props) => {
  const { t } = useTranslation();
  hooksInstance.useDocumentTitle(props.title);

  return <AuthChangePassword />;
};

export default ChangePassword;
