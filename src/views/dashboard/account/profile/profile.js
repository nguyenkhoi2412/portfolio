import * as React from "react";
//#region utils support
import { useTranslation } from "react-i18next";
import { gridSpacing } from "@constants";
import DocumentPdf from "@components/mui-ui/extended/documentPdf";
//#endregion

// material-ui
import { Grid, Typography } from "@mui/material";

//#region components
import SubCard from "@components/mui-ui/cards/subCard";
//#endregion

// ============================|| ACCOUNT SHADOW ||============================ //

const AccountProfile = (props) => {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={gridSpacing}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <SubCard
            title={<Typography variant="h2">Nguyen Le Minh Khoi</Typography>}
            contentClass={`pdf-reviewer`}
          >
            <DocumentPdf />
          </SubCard>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AccountProfile;
