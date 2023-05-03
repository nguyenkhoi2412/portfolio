import * as React from "react";
//#region utils support
import { useTranslation } from "react-i18next";
import { hookInstance } from "@utils/hookInstance";
//#endregion

// material-ui
import { Box, Card, Grid } from "@mui/material";

//#region components
import AuthChangePassword from "@authentication/changepassword";
//#endregion

const ChangePassword = (props) => {
  const { t } = useTranslation();
  hookInstance.useDocumentTitle(props.title);

  return <AuthChangePassword />;
};

export default ChangePassword;
