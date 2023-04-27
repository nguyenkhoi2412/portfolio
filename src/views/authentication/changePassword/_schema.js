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
      currentPassword: yup.string().required(t("authentication.entercurrentpassword")),
      newpassword: yup.string().required(t("authentication.enternewpassword")),
      confirmPassword: yup.string().required(t("authentication.enterconfirmpassword")),
    });
  },
  dataForm: () => {
    const { t } = useTranslation();

    // render password
    const currentPassword = {
      tabIndex: 1,
      id: "currentPassword",
      field: "currentPassword",
      type: "password",
      label: t("authentication.passwordcurrent"),
      helperText: t("authentication.enternewpassword"),
    };

    const newpassword = {
      tabIndex: 2,
      id: "newpassword",
      field: "newpassword",
      type: "password",
      label: t("authentication.passwordnew"),
      helperText: t("authentication.enterconfirmpassword"),
    };

    const confirmPassword = {
      tabIndex: 3,
      id: "confirmPassword",
      field: "confirmPassword",
      type: "password",
      label: t("authentication.passwordconfirm"),
      helperText: t("authentication.enterpassword"),
    };

    // push all to array
    let inputForms = [];
    inputForms.push(currentPassword);
    inputForms.push(newpassword);
    inputForms.push(confirmPassword);

    //sort fields by index
    inputForms.sort((a, b) => (a.tabIndex > b.tabIndex ? 1 : -1));
    return inputForms;
  },
};
