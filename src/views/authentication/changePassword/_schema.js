import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { currentUserState } from "@reduxproviders/auth.reducer";

export default {
  initialValues: () => {
    const currentUser = useSelector(currentUserState);

    return {
      currentUsername: currentUser.username,
      currentPassword: "",
      usernameResetPassword: currentUser.username,
      newPassword: "",
      confirmPassword: "",
    };
  },
  validation: () => {
    const { t } = useTranslation();
    return yup.object({
      currentPassword: yup
        .string()
        .required(t("authentication.entercurrentpassword")),
      usernameResetPassword: yup
        .string()
        .required(t("authentication.enterusernametoresetpassword")),
      newPassword: yup
        .string()
        .required(t("authentication.enternewpassword"))
        .min(8, t("authentication.passwordmusgreater8")),
      confirmPassword: yup
        .string()
        .required(t("authentication.enterconfirmpassword"))
        .oneOf(
          [yup.ref("newPassword"), null],
          t("authentication.passworddonotmatch")
        ),
    });
  },
  dataForm: () => {
    const { t } = useTranslation();
    const currentUser = useSelector(currentUserState);

    // render password
    const currentPassword = {
      tabIndex: 1,
      id: "currentPassword",
      field: "currentPassword",
      type: "password",
      label: t("authentication.passwordcurrent"),
      helperText: t("authentication.enternewpassword"),
    };

    // render usernameResetPassword
    const usernameResetPassword = {
      tabIndex: 2,
      id: "usernameResetPassword",
      field: "usernameResetPassword",
      type: "text",
      label: t("authentication.accountresetpassword"),
      helperText: t("authentication.enterusernametoresetpassword"),
      disabled: currentUser.isUser || currentUser.isVisitor,
    };

    const newPassword = {
      tabIndex: 3,
      id: "newPassword",
      field: "newPassword",
      type: "password",
      label: t("authentication.passwordnew"),
      helperText: t("authentication.enterconfirmpassword"),
    };

    const confirmPassword = {
      tabIndex: 4,
      id: "confirmPassword",
      field: "confirmPassword",
      type: "password",
      label: t("authentication.passwordconfirm"),
      helperText: t("authentication.enterpassword"),
    };

    // push all to array
    let inputForms = [];
    inputForms.push(currentPassword);
    inputForms.push(usernameResetPassword);
    inputForms.push(newPassword);
    inputForms.push(confirmPassword);

    //sort fields by index
    inputForms.sort((a, b) => (a.tabIndex > b.tabIndex ? 1 : -1));
    return inputForms;
  },
};
