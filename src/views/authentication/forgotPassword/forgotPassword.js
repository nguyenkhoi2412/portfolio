import "../_auth.scss";
import * as React from "react";
import { useTranslation, Trans } from "react-i18next";
import _schema from "./_schema";
//#region mui-ui
import Link from "@mui/material/Link";
import { hooksInstance } from "@utils/hooksInstance";
import { useTheme } from "@mui/material/styles";
import { Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
//#endregion
//#region components
import AuthWrapper from "../AuthWrapper";
import AuthCardWrapper from "../AuthCardWrapper";
import FormForgotPassword from "../forms/forgotPassword";
import Logo from "@components/ui/logo";
// import AuthFooter from "../AuthFooter";
//#endregion

const ForgotPassword = (props) => {
  const theme = useTheme();
  hooksInstance.useDocumentTitle(props.title);
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

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
              <AuthCardWrapper className="auth forgot-password">
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
                            {t("authentication.forgotpassword")}
                          </Typography>
                          <Typography
                            variant="caption"
                            fontSize="16px"
                            textAlign={matchDownSM ? "center" : "inherit"}
                          >
                            {t(
                              "authentication.enteryouemailaddressresetpassword"
                            )}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <FormForgotPassword />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
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

export default ForgotPassword;
