import "./_details.scss";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import * as React from "react";
//#region utils support
import { helpersExtension } from "@utils/helpersExtension";
import { useTranslation } from "react-i18next";
import { gridSpacing } from "@constants";
import FormAccountDetailInfo from "./formAccountDetailInfo";
//#endregion

// material-ui
import AnimateButton from "@components/mui-ui/extended/animateButton";
import { Stack, Grid, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";

//#region components
import SubCard from "@components/mui-ui/cards/subCard";
//#endregion

//#region redux provider
import { useSelector } from "react-redux";
import { currentUserState } from "@reduxproviders/auth.reducer";
//#endregion

// ============================|| ACCOUNT DETAIL INFO ||============================ //

const AccountInfo = (props) => {
  const { t } = useTranslation();
  const currentUser = useSelector(currentUserState);
  const [submitting, setSubmitting] = React.useState(false);

  //#region useEffect
  React.useEffect(() => {}, []);
  //#endregion

  //#region handle events
  const handleUploadNewImage = () => {
    alert("Implement soon");
  };
  //#endregion

  //#region render content
  const renderAvatarDefault = () => {
    return helpersExtension.checkIsNotNull(
      currentUser?.detailInfos?.avatarPath
    ) ? (
      <></>
    ) : (
      <PersonPinOutlinedIcon />
    );
  };

  //#endregion
  console.log("sdfsdfsd");
  return (
    <React.Fragment>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={4}>
          <SubCard
            title={t("authentication.profilepicture")}
            contentClass={
              helpersExtension.checkIsNotNull(
                currentUser?.detailInfos?.avatarPath
              )
                ? "avatar-container"
                : "avatar-container svg"
            }
          >
            <Grid container spacing={gridSpacing} justifyContent={`center`}>
              <Grid item>
                <Stack spacing={2} alignItems={`center`}>
                  <Avatar
                    alt={
                      currentUser?.detailInfos?.firstName +
                      " " +
                      currentUser?.detailInfos?.lastName
                    }
                    src={currentUser?.detailInfos?.avatarPath}
                    sx={{
                      width: 100,
                      height: 100,
                    }}
                  >
                    {renderAvatarDefault()}
                  </Avatar>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={submitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      onClick={handleUploadNewImage}
                    >
                      {t("user.uploadnewimage")}
                    </Button>
                  </AnimateButton>
                </Stack>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} md={8}>
          <SubCard title={t("authentication.accountdetails")}>
            <Grid container spacing={gridSpacing}>
              <FormAccountDetailInfo currentUser={currentUser} />
            </Grid>
          </SubCard>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AccountInfo;
