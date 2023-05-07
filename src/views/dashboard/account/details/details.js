import "./_details.scss";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import * as React from "react";
//#region utils support
import { useSnackbar } from "notistack";
import { helpersExtension, stringExtension } from "@utils/helpersExtension";
import { useTranslation } from "react-i18next";
import { gridSpacing } from "@constants";
import FormAccountDetailInfo from "./formAccountDetailInfo";
import severity from "@constants/severity";
//#endregion

// material-ui
import AnimateButton from "@components/mui-ui/extended/animateButton";
import { Stack, Grid, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";

//#region components
import SubCard from "@components/mui-ui/cards/subCard";
//#endregion

//#region redux provider
import { useDispatch, useSelector } from "react-redux";
import { currentUserState } from "@reduxproviders/auth.reducer";
import { FILE_UPLOAD } from "@reduxproviders/file.reducer";
//#endregion

// ============================|| ACCOUNT DETAIL INFO ||============================ //

const AccountInfo = (props) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserState);
  const [file, setFile] = React.useState();
  const [submitting, setSubmitting] = React.useState(false);

  //#region useEffect
  React.useEffect(() => {
    setFile(currentUser?.detailInfos?.avatarPath);
  }, []);
  //#endregion

  //#region handle events
  const handleOnChangeUploadFile = (event) => {
    var file = event.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);
    dispatch(FILE_UPLOAD(formData));
    // var fileBase64 = stringExtension.getBase64(file);
    // fileBase64.then((response) => {
    //   if (response.ok) {
    //     setFile(response.d);
    //   } else {
    //     // variant could be success, error, warning, info, or default
    //     enqueueSnackbar(response.message, {
    //       variant: severity.error,
    //     });
    //   }
    // });
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
                    src={file}
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
                      fullWidth
                      size="large"
                      // type="submit"
                      variant="contained"
                      component="label"
                    >
                      <input
                        hidden
                        // accept="image/*"
                        // multiple
                        type="file"
                        name="avatar"
                        onChange={handleOnChangeUploadFile}
                      />
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
