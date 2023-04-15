import { MODULES } from "@routes/_modules";
import DashboardLayout from "@views/dashboard/layout";

export default [
  {
    path: MODULES.DASHBOARD,
    public: true,
    title: "Dashboard | cxStudio",
    element: <DashboardLayout />,
  },
];
