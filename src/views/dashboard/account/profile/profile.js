import PropTypes from "prop-types";
import * as React from "react";
//#region utils support
import { useTranslation } from "react-i18next";
import { gridSpacing } from "@constants";
import { hooksInstance } from "@utils/hooksInstance";
//#endregion

// material-ui
import { Box, Card, Grid } from "@mui/material";

//#region components
import DashboardMainContentCardWrapper from "@dashboard/_layout/mainContentCardWrapper";
import SubCard from "@components/mui-ui/cards/subCard";
//#endregion

// ===============================|| SHADOW BOX ||=============================== //

const ShadowBox = ({ shadow }) => (
  <Card sx={{ mb: 3, boxShadow: shadow }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 4.5,
        bgcolor: "primary.light",
        color: "grey.800",
      }}
    >
      <Box sx={{ color: "inherit" }}>boxShadow: {shadow}</Box>
    </Box>
  </Card>
);

ShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired,
};

// ============================|| UTILITIES SHADOW ||============================ //

const AccountProfile = (props) => {
  const { t } = useTranslation();
  hooksInstance.useDocumentTitle(props.title);

  return (
    <DashboardMainContentCardWrapper
      title={t("authentication.accountprofile")}
      // secondary={
      //   <SecondaryAction link="https://next.material-ui.com/system/shadows/" />
      // }
    >
      <Grid item xs={12}>
        <SubCard title="Basic Shadow">
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="0" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="1" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="2" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="3" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="4" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="5" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="6" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="7" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="8" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="9" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="10" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="11" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="12" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="13" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="14" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="15" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="16" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="17" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="18" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="19" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="20" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="21" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="22" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="23" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="24" />
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </DashboardMainContentCardWrapper>
  );
};

export default AccountProfile;
