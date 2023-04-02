import "./_signUp.scss";
import * as React from "react";
import { useTranslation, Trans } from "react-i18next";
//#region import FORMS
import _schema from "./_schema";
import { useFormik } from "formik";
import { Helpers, objectExtension, hooksInstance } from "@utils/helpers";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import InputField from "@components/forms/inputField";
import SelectField from "@components/forms/selectField";
//#endregion
//#region components
//#endregion
//#region mui-ui
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import severity from "@constants/severity";
//#endregion
//#region redux providers
import {
  SHOW_PROGRESSBAR,
  HIDE_PROGRESSBAR,
} from "@components/mui-ui/progressBar/progressBar.reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  REGISTER_USER,
  userState,
  currentUserState,
} from "@reduxproviders/user.reducer";
import { ROLE_GET_ALL, roleState } from "@reduxproviders/role.reducer";
//#endregion

const SignUp = () => {
  const { t } = useTranslation();
  const dataRoleValues = useSelector(roleState);
  const dispatch = useDispatch();
  const navigage = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [showMessageAlert, setShowMessageAlert] = React.useState(false);
  const [messageContentAlert, setMessageContentAlert] = React.useState();
  const [alertBoxSeverity, setAlertBoxSeverity] = React.useState(
    severity.error
  );
  const dataValues = useSelector(userState);
  const [lsRoles, setLsRoles] = React.useState([]);

  //#region getData
  const getRoles = () => {
    Helpers.simulateNetworkRequest(100).then(async () => {
      await dispatch(ROLE_GET_ALL())
        .unwrap()
        .then((result) => {
          if (result.ok) {
            setLsRoles(result.rs);
          }
        })
        .catch((error) => {
          // variant could be success, error, warning, info, or default
          enqueueSnackbar(t("connection.error"), {
            variant: severity.error,
          });
        });
    });
  };
  //#endregion

  //#region POST DATA
  const registerUser = async (values) => {
    await dispatch(REGISTER_USER(values))
      .unwrap()
      .then((result) => {
        setSubmitting(false);
        dispatch(HIDE_PROGRESSBAR());
        if (result.ok) {
          setAlertBoxSeverity(severity.success);
          setShowMessageAlert(true);
          setMessageContentAlert(t("authentication.registersuccess"));
        } else {
          setAlertBoxSeverity(severity.error);
          setShowMessageAlert(true);
          setMessageContentAlert(
            t("authentication.registerfail") + ". " + result.message
          );
        }
        formik.resetForm();
      })
      .catch((error) => {
        setSubmitting(false);
        dispatch(HIDE_PROGRESSBAR());
        // variant could be success, error, warning, info, or default
        enqueueSnackbar(error, {
          variant: severity.error,
        });
      });
  };
  //#endregion

  // #region useEffect
  React.useEffect(() => {
    getRoles();
  }, []);
  //#endregion

  //#region useFormik
  const initialValues = _schema.initialValues();
  const validationSchema = _schema.validation();
  const dataForm = _schema.dataForm(lsRoles);
  const [enableValidation, setEnableValidation] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: enableValidation,
    validateOnBlur: enableValidation,
    onSubmit: (values) => {
      setSubmitting(true);
      dispatch(SHOW_PROGRESSBAR());
      Helpers.simulateNetworkRequest(100).then(async () => {
        registerUser(values);
      });
    },
  });
  //#endregion

  // #region handle event
  const handleSubmit = (event) => {
    event.preventDefault();
    if (submitting) return;

    setEnableValidation(true);
    formik.handleSubmit();
  };

  //#endregion

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ m: 1, bgcolor: "secondary.main", width: 120, height: 120 }}
        >
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t("authentication.signup")}
        </Typography>
        <Box
          component="form"
          className="form"
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            {dataForm.map((item, index) => {
              let keyField = item.id + "_" + index;
              let hasError =
                Boolean(
                  objectExtension.getValue(formik, "touched." + item.field)
                ) && objectExtension.getValue(formik, "errors." + item.field);
              switch (item.type) {
                case "text":
                case "password":
                  return (
                    <InputField
                      margin="normal"
                      fullWidth
                      key={keyField}
                      id={item.id}
                      type={item.type}
                      tabIndex={item.tabIndex}
                      label={item.label}
                      name={item.field}
                      autoFocus={item.autoFocus}
                      value={objectExtension.getValue(
                        formik,
                        "values." + item.field
                      )}
                      setValue={formik.setFieldValue}
                      onChange={formik.handleChange}
                      error={hasError}
                      helperText={hasError ? item.helperText : ""}
                      preventXSS={item.preventXSS}
                      xs={item.xs}
                      sm={item.sm}
                    />
                  );
                  break;
                case "select":
                  return (
                    <SelectField
                      key={keyField}
                      id={item.id}
                      type={item.type}
                      tabIndex={item.tabIndex}
                      label={item.label}
                      name={item.field}
                      value={objectExtension.getValue(
                        formik,
                        "values." + item.field
                      )}
                      listItems={item.listItems}
                      setValue={formik.setFieldValue}
                      onChange={formik.handleChange}
                      error={hasError}
                      helperText={hasError ? item.helperText : ""}
                      xs={item.xs}
                      sm={item.sm}
                    />
                  );
                  break;
              }
            })}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Collapse in={showMessageAlert}>
                  <Alert
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setShowMessageAlert(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                    severity={alertBoxSeverity}
                  >
                    {messageContentAlert}
                  </Alert>
                </Collapse>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="./signin" variant="body2">
                {t("authentication.haveanaccount")}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default React.memo(SignUp, (props, nextProps) => {
  if (props === nextProps) {
    // return true if you don't need re-render
    return true;
  }
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        MUI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
