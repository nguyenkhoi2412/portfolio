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
          url: navigateLocation.ACCOUNT.PROFILES,
          target: false,
        },
        {
          id: "register3",
          title: <Trans i18nKey={"authentication.register"}></Trans>,
          type: "item",
          url: navigateLocation.AUTH.SIGNUP,
          target: true,
        },
      ],
    },
  ],
};

export default authentication;
