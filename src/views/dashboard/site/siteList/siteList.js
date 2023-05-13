import "./_siteList.scss";
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

const SiteList = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <MainCard
        title={t("site.sitelist")}
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
            {/* <SubCard contentClass={`pdf-reviewer`}> */}
            {/* <DocumentPdf /> */}
            {/* </SubCard> */}
          </Grid>
        </Grid>
      </MainCard>
    </React.Fragment>
  );
};

export default SiteList;
