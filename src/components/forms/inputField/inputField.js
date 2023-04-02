import "./_inputField.scss";
import * as React from "react";
import { Helpers, objectExtension, stringExtension } from "@utils/helpers";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import vars from "@constants/variables";

const regexEditor = vars.regexEditor;
const regexXSS = vars.regexXSS;
const InputField = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isPasswordField, setIsPasswordField] = React.useState(false);

  let hasError = false;
  if (typeof props.error == "boolean") {
    hasError = props.error;
  }
  if (typeof props.error == "string") {
    hasError = true;
  }

  //#region useEffect
  React.useEffect(() => {
    setIsPasswordField(props.type === "password");
  }, [props]);
  //#endregion

  //#region handle events
  const togglePasswordHide = () => {
    setShowPassword(!showPassword);
  };

  const inputOnChange = (e) => {
    props.onChange(e);

    let val = e.target.value;
    val = stringExtension.stripedHtml(val);

    if (props.preventXSS) {
      val = val.replace(regexXSS, "");
    }

    if (props.setValue instanceof Function) {
      props.setValue(props.name, val);
    }
  };
  //#endregion

  const renderIconVisiblePassword = () => {
    return (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={togglePasswordHide}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    );
  };
  return (
    <Grid
      item
      xs={props.xs || 12}
      sm={props.sm || 12}
      className="field-container"
    >
      {/* <InputLabel htmlFor='my-input'>Email address</InputLabel> */}
      <TextField
        margin="normal"
        fullWidth
        InputProps={{
          tabIndex: props.tabIndex,
          endAdornment:
            props.type === "password" ? renderIconVisiblePassword() : <></>,
        }}
        id={props.id}
        type={isPasswordField ? (showPassword ? "text" : "password") : "text"}
        label={props.label}
        name={props.name}
        value={props.value}
        onChange={inputOnChange}
        error={hasError}
        helperText={props.helperText}
        className="form-control"
      />
      {/* <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText> */}
    </Grid>
  );
};

export default InputField;
