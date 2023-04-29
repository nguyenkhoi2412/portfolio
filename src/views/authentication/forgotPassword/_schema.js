import { useTranslation } from "react-i18next";
import * as yup from "yup";

export default {
  initialValues: () => {
    return {
      username: "",
    };
  },
  validation: () => {
    const { t } = useTranslation();
    return yup.object({
      username: yup
        .string()
        .email(t("authentication.mustbeavalidemail"))
        .required(t("authentication.enteryouremailaddress")),
    });
  },
  dataForm: () => {
    const { t } = useTranslation();

    // render username
    const username = {
      tabIndex: 0,
      id: "username",
      field: "username",
      type: "email",
      label: t("authentication.emailaddress"),
      autoFocus: true,
      helperText: t("authentication.enteryouremailaddress"),
    };
    username.validations = yup
      .string()
      .email(t("authentication.mustbeavalidemail"))
      .required(t("authentication.enteryouremailaddress"));

    // push all to array
    let inputForms = [];
    inputForms.push(username);

    //sort fields by index
    inputForms.sort((a, b) => (a.tabIndex > b.tabIndex ? 1 : -1));
    return inputForms;
  },
};
