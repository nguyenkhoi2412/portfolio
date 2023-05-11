import "./_userlist.scss";
import * as React from "react";
//#region utils support
import { useTranslation } from "react-i18next";
import { gridSpacing } from "@constants";
import DocumentPdf from "@components/mui-ui/extended/documentPdf";
//#endregion

// material-ui
import { Grid } from "@mui/material";

//#region components
import SubCard from "@components/mui-ui/cards/subCard";
import MainCard from "@components/mui-ui/cards";
import { t } from "i18next";
//#endregion

// ============================|| ACCOUNT SHADOW ||============================ //

const UserList = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <MainCard
        title={t("user.userlist")}
        // secondary={
        //   <SecondaryAction link="https://next.material-ui.com/system/typography/" />
        // }
      >
        <Grid
          container
          spacing={gridSpacing}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            User list
          </Grid>
        </Grid>
      </MainCard>
    </React.Fragment>
  );
};

export default UserList;
