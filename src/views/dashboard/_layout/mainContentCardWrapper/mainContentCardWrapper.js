import "./_mainContentCardWrapper.scss";
// assets
import { IconChevronRight } from "@tabler/icons-react";
import navigation from "@dashboard/menuSidebar";

// material-ui
import { Box, Card, Grid } from "@mui/material";
// project import
import MainCard from "@components/mui-ui/cards";
import Breadcrumbs from "@components/mui-ui/extended/breadcrumbs";
import SecondaryAction from "@components/mui-ui/cards/cardSecondaryAction";
import { gridSpacing } from "@constants";

// ==============================|| DASHBOARD MAIN CONTENT CARD WRAPPER ||============================== //

const DashboardMainContentCardWrapper = ({ children, ...other }) => (
  <MainCard
    className="dashboard wrapper-container"
    {...other}
    // title="Basic Shadows"
    secondary={
      <>
        {/* <SecondaryAction link="https://next.material-ui.com/system/shadows/" /> */}
      </>
    }
  >
    <Grid container spacing={gridSpacing}>
      {children}
    </Grid>
  </MainCard>
);

export default DashboardMainContentCardWrapper;
