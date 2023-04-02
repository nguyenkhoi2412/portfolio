import "./_selectField.scss";
import * as React from "react";
import { Helpers, objectExtension, stringExtension } from "@utils/helpers";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import vars from "@constants/variables";

const regexEditor = vars.regexEditor;
const regexXSS = vars.regexXSS;
const SelectField = (props) => {
  let hasError = false;
  const [dataValue, setDataValue] = React.useState("");
  const [dataValueMultiple, setDataValueMultiple] = React.useState([]);
  const [lsItems, setLsItems] = React.useState([]);
  const [multiple, setMultiple] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  if (typeof props.error == "boolean") {
    hasError = props.error;
  }
  if (typeof props.error == "string") {
    hasError = true;
  }

  //#region useEffect
  React.useEffect(() => {
    // check is disabled
    if (props.disabled) {
      setDisabled(props.disabled);
    }

    // check is multiple
    let isMultiple = Array.isArray(props.value);
    setMultiple(isMultiple);
    if (isMultiple) {
      setDataValueMultiple(props.value);
    } else {
      setDataValue(props.value);
    }
  }, [props.value]);

  React.useEffect(() => {
    setLsItems(props.listItems);
  }, [props.listItems]);
  //#endregion

  const selectOnChange = (e) => {
    props.onChange(e);
    if (multiple) {
      setDataValueMultiple(e.target.value);
    } else {
      setDataValue(e.target.value);
    }
  };

  const RenderFieldContainer = (propsFc) => {
    if (disabled) {
      return (
        <FormControl margin="normal" fullWidth disabled>
          {propsFc.children}
        </FormControl>
      );
    }

    if (hasError) {
      return (
        <FormControl margin="normal" fullWidth error>
          {propsFc.children}
        </FormControl>
      );
    }

    return (
      <FormControl margin="normal" fullWidth>
        {propsFc.children}
      </FormControl>
    );
  };

  return (
    <Grid
      item
      xs={props.xs || 12}
      sm={props.sm || 12}
      className="field-container"
    >
      <RenderFieldContainer>
        <InputLabel id={props.id + "-label"}>{props.label}</InputLabel>
        <Select
          key={Helpers.uuidv4()}
          fullWidth
          multiple={multiple}
          tabIndex={props.tabIndex}
          labelId={props.id + "-label"}
          id={props.id}
          value={multiple ? dataValueMultiple : dataValue}
          label={props.label}
          onChange={selectOnChange}
          className="form-control"
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          {lsItems.map((item, index) => {
            return (
              <MenuItem
                key={`MenuItem_` + index}
                value={item.name.toLowerCase()}
              >
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>{props.helperText}</FormHelperText>
      </RenderFieldContainer>
    </Grid>
  );
};

export default React.memo(SelectField, (props, nextProps) => {
  if (props.value === nextProps.value && props.listItems === nextProps.listItems) {
    // return true if you don't need re-render
    return true;
  }
});
