import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useSelector } from "react-redux";
import {
  currentUserState,
  isUserState,
  isVisitorState,
} from "@reduxproviders/auth.reducer";

export default {
  initialValues: () => {
    const currentUser = useSelector(currentUserState);
    return {
      detailInfos: {
        firstName: currentUser.detailInfos.firstName,
        lastName: currentUser.detailInfos.lastName,
        avatarPath: currentUser.detailInfos.avatarPath,
        country: currentUser.detailInfos.country,
      },
      username: currentUser.username,
      phone: currentUser.phone,
      role: currentUser.role,
      oneTimePassword: currentUser.oneTimePassword,
    };
  },
  validation: () => {
    const { t } = useTranslation();
    return yup.object({
      detailInfos: yup.object().shape({
        firstName: yup.string().required(t("authentication.enterfirstname")),
        lastName: yup.string().required(t("authentication.enterlastname")),
      }),
      username: yup
        .string()
        .email(t("authentication.mustbeavalidemail"))
        .required(t("authentication.enteryouremailaddress")),
    });
  },
  dataForm: (lsRoles, getCountries) => {
    const { t } = useTranslation();
    const isVisitor = useSelector(isVisitorState);
    const isUser = useSelector(isUserState);

    // render firstname
    const firstname = {
      tabIndex: 0,
      id: "detailInfos.firstName",
      field: "detailInfos.firstName",
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
      id: "detailInfos.lastName",
      field: "detailInfos.lastName",
      type: "text",
      label: t("authentication.lastname"),
      preventXSS: true,
      helperText: t("authentication.enterlastname"),
      xs: 12,
      sm: 6,
    };

    // render username
    const username = {
      tabIndex: 2,
      id: "username",
      field: "username",
      type: "email",
      label: t("authentication.emailaddress"),
      autoFocus: true,
      helperText: t("authentication.enteryouremailaddress"),
    };

    // render role
    const role = {
      tabIndex: 3,
      id: "role",
      field: "role",
      type: "select",
      label: t("authentication.rolename"),
      listItems: lsRoles.map((x) => {
        return {
          _id: x.lowercase,
          name: x.name,
        };
      }),
      preventXSS: true,
      disabled: isVisitor || isUser,
      helperText: t("authentication.selectrole"),
    };

    // render phone
    const phone = {
      tabIndex: 4,
      id: "phone",
      field: "phone",
      type: "number",
      label: t("user.phone"),
      preventXSS: true,
      xs: 12,
      sm: 6,
    };

    // render country
    const country = {
      tabIndex: 5,
      id: "detailInfos.country",
      field: "detailInfos.country",
      type: "select",
      label: t("user.country"),
      listItems: getCountries.map((x) => {
        return {
          _id: x.name.common,
          name: x.name.common,
          icon: x.flags.svg,
          alt: x.flags.alt,
        };
      }),
      autoComplete: true,
      xs: 12,
      sm: 6,
    };

    // render oneTimePassword
    const oneTimePassword = {
      tabIndex: 6,
      id: "oneTimePassword",
      field: "oneTimePassword",
      type: "button",
      label: t("authentication.securewithtotp2fa"),
      xs: 12,
    };

    // push all to array
    let inputForms = [];
    inputForms.push(username);
    inputForms.push(firstname);
    inputForms.push(lastname);
    inputForms.push(phone);
    inputForms.push(role);
    inputForms.push(country);
    inputForms.push(oneTimePassword);

    //sort fields by index
    inputForms.sort((a, b) => (a.tabIndex > b.tabIndex ? 1 : -1));
    return inputForms;
  },
};
