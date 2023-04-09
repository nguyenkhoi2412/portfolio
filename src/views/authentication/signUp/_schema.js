import { useTranslation } from "react-i18next";
import { ROLE } from "@constants/enumRoles";
import * as yup from "yup";

export default {
  initialValues: () => {
    return {
      detailInfos: {
        firstname: "",
        lastname: "",
      },
      role: ROLE.USER.name,
      username: "",
      password: "",
    };
  },
  validation: () => {
    const { t } = useTranslation();
    return yup.object({
      detailInfos: yup.object().shape({
        firstname: yup.string().required(t("authentication.enterfirstname")),
        lastname: yup.string().required(t("authentication.enterlastname")),
      }),
      username: yup
        .string()
        .email(t("authentication.mustbeavalidemail"))
        .max(255)
        .required(t("authentication.enterusername")),
      password: yup
        .string()
        .max(255)
        .required(t("authentication.enterpassword")),
    });
  },
  dataForm: (lsRoles) => {
    const { t } = useTranslation();
    // render firstname
    const firstname = {
      tabIndex: 0,
      id: "detailInfos.firstname",
      field: "detailInfos.firstname",
      type: "text",
      label: t("authentication.firstname"),
      autoFocus: true,
      preventXSS: true,
      helperText: t("authentication.enterfirstname"),
      xs: 12,
      sm: 6,
    };

    // render lastname
    const lastname = {
      tabIndex: 1,
      id: "detailInfos.lastname",
      field: "detailInfos.lastname",
      type: "text",
      label: t("authentication.lastname"),
      preventXSS: true,
      helperText: t("authentication.enterlastname"),
      xs: 12,
      sm: 6,
    };

    // render role
    const role = {
      tabIndex: 2,
      id: "role",
      field: "role",
      type: "select",
      label: t("authentication.rolename"),
      listItems: lsRoles,
      preventXSS: true,
      helperText: t("authentication.selectrole"),
    };

    // render username
    const username = {
      tabIndex: 3,
      id: "username",
      field: "username",
      type: "text",
      label: t("authentication.username"),
      helperText: t("authentication.enterusername"),
    };

    // render password
    const password = {
      tabIndex: 4,
      id: "password",
      field: "password",
      type: "password",
      label: t("authentication.password"),
      helperText: t("authentication.enterpassword"),
    };

    // push all to array
    let inputForms = [];
    inputForms.push(firstname);
    inputForms.push(lastname);
    inputForms.push(role);
    inputForms.push(username);
    inputForms.push(password);

    //sort fields by index
    inputForms.sort((a, b) => (a.tabIndex > b.tabIndex ? 1 : -1));
    return inputForms;
  },
};
