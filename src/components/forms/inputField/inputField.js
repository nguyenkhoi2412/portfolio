import "./_inputField.scss";
import * as React from "react";
import { useTranslation, Trans } from "react-i18next";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

const InputField = (props) => {
  let hasError = false;
  if (typeof props.error == "boolean") {
    hasError = props.error;
  }
  if (typeof props.error == "string") {
    hasError = true;
  }

  //#region useEffect
  React.useEffect(() => {});
  //#endregion
  return (
    <>
      <FormControl fullWidth>
        {/* <InputLabel htmlFor='my-input'>Email address</InputLabel> */}
        <TextField
          margin="normal"
          fullWidth
          inputProps={{ tabIndex: props.tabIndex }}
          id={props.id}
          type={props.type}
          label={props.label}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          error={hasError}
          helperText={props.helperText}
        />
        {/* <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText> */}
      </FormControl>
    </>
  );
};

export default InputField;
