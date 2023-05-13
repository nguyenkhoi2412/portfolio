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
  title: <Trans i18nKey={`user.account`}></Trans>,
  caption: "",
  type: "group",
  children: [
    // {
    //   id: "authentication",
    //   title: "Authentication",
    //   type: "collapse",
    //   icon: icons.IconKey,
    //   children: [
    {
      id: "userlist",
      title: <Trans i18nKey={"user.userlist"}></Trans>,
      type: "item",
      url: navigateLocation.ACCOUNT.USER_LIST,
      target: false,
      breadcrumbs: false,
    },
    //   ],
    // },
  ],
};

export default authentication;
