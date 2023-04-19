import "../_auth.scss";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { navigateLocation } from "@routes/navigateLocation";
import { useTranslation, Trans } from "react-i18next";
import _schema from "./_schema";
//#region mui-ui
import Link from "@mui/material/Link";
import { helpersExtension, objectExtension } from "@utils/helpersExtension";
import { hooksInstance } from "@utils/hooksInstance";
import { useTheme } from "@mui/material/styles";
import { Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
//#endregion
//#region components
import AuthWrapper from "../AuthWrapper";
import AuthCardWrapper from "../AuthCardWrapper";
import FormCodeVerification from "../forms/codeVerification";
import Logo from "@components/ui/logo";
//#endregion
//#region reduxprovider
//#endregion

const CodeVerification = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  hooksInstance.useDocumentTitle(props.title);
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  //#region useEffect
  React.useEffect(() => {
  }, []);
  //#endregion

  return (
    <AuthWrapper>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "calc(100vh - 68px)" }}
          >
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper className="auth verify-code">
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item sx={{ mb: 3 }}>
                    <Link to="#">
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={matchDownSM ? "column-reverse" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          spacing={1}
                        >
                          <Typography
                            color={theme.palette.secondary.main}
                            gutterBottom
                            variant={matchDownSM ? "h3" : "h2"}
                          >
                            {t("authentication.enterverifycode")}
                          </Typography>
                          <Typography
                            variant={matchDownSM ? "h5" : "h4"}
                            fontSize="16px"
                            textAlign={matchDownSM ? "center" : "inherit"}
                          >
                            {t("authentication.wesendyouonemail")}
                          </Typography>
                          <Typography
                            variant="caption"
                            fontSize="16px"
                            textAlign={matchDownSM ? "center" : "inherit"}
                          >
                            {t("authentication.wesendyoucode")}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <FormCodeVerification />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2} className="resend-code">
                      <Grid item xs={8}>
                        <Typography
                          variant="caption"
                          fontSize="14px"
                          textAlign={matchDownSM ? "center" : "inherit"}
                        >
                          {t("authentication.didnotreceivecodeverify")}
                        </Typography>
                      </Grid>
                      <Grid item xs={4} className="link">
                        <Typography
                          // variant={matchDownSM ? "h6" : "h5"}
                          fontSize="14px"
                          textAlign="right"
                        >
                          <Link
                            href="#"
                            color={theme.palette.primary.main}
                            underline="none"
                          >
                            {t("authentication.resendcode")}
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider
                      sx={{ flexGrow: 1, marginBottom: 2 }}
                      orientation="horizontal"
                    />
                    <Grid
                      item
                      container
                      direction="column"
                      alignItems="center"
                      xs={12}
                    >
                      <Stack
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                      >
                        <Link
                          href={`./signin`}
                          underline="none"
                          variant="subtitle1"
                          color={theme.palette.grey[900]}
                        >
                          {t("authentication.alreadyhaveanaccount")}
                        </Link>
                        <Link
                          href={`./signup`}
                          underline="none"
                          variant="subtitle1"
                          color={theme.palette.grey[900]}
                        >
                          {t("authentication.donthaveanaccount")}
                        </Link>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid> */}
      </Grid>
    </AuthWrapper>
  );
};

export default CodeVerification;
