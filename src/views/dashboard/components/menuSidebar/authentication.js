// assets
import { IconKey } from "@tabler/icons-react";
import { Trans } from "react-i18next";
import { navigateLocation } from "@routes/navigateLocation";

// constant
const icons = {
  IconKey,
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const authentication = {
  id: "authentication",
  title: <Trans i18nKey={`authentication.authentication`}></Trans>,
  caption: "",
  type: "group",
  children: [
    {
      id: "authentication",
      title: "Authentication",
      type: "collapse",
      icon: icons.IconKey,
      children: [
        {
          id: "accountprofile",
          title: <Trans i18nKey={"authentication.accountprofile"}></Trans>,
          type: "item",
          url: navigateLocation.ACCOUNT.PROFILE,
          target: false,
          breadcrumbs: false,
        },
        {
          id: "accountdetails",
          title: <Trans i18nKey={"authentication.accountdetails"}></Trans>,
          type: "item",
          url: navigateLocation.ACCOUNT.DETAILS,
          target: false,
          breadcrumbs: false,
        },
        {
          id: "changepassword",
          title: <Trans i18nKey={"authentication.changepassword"}></Trans>,
          type: "item",
          url: navigateLocation.ACCOUNT.CHANGE_PASSOWRD,
          target: false,
          breadcrumbs: false,
        },
        {
          id: "register",
          title: <Trans i18nKey={"authentication.createnew"}></Trans>,
          type: "item",
          url: navigateLocation.ACCOUNT.CREATE_NEW,
          target: false,
          breadcrumbs: false,
        },
      ],
    },
  ],
};

export default authentication;
