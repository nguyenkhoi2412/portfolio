import { useTranslation } from "react-i18next";
import * as yup from "yup";

export default {
  initialValues: () => {
    return {
      code_verify: "",
    };
  },
  validation: () => {
    const { t } = useTranslation();
    return yup.object({
      code_verify: yup
        .number()
        .required(t("authentication.token_expired")),
    });
  },
  dataForm: () => {
    const { t } = useTranslation();

    // render username
    const code_verify = {
      tabIndex: 0,
      id: "code_verify",
      field: "code_verify",
      type: "number",
      label: t("authentication.verification_code"),
      autoFocus: true,
      helperText: t("authentication.enter_verify_code"),
    };

    // push all to array
    let inputForms = [];
    inputForms.push(code_verify);

    //sort fields by index
    inputForms.sort((a, b) => (a.tabIndex > b.tabIndex ? 1 : -1));
    return inputForms;
  },
};
