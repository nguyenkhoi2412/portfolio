import { hooksInstance } from "@utils/hooksInstance";

const DashboardDefault = (props) => {
  hooksInstance.useDocumentTitle(props.title);
  return <>Dashboard</>;
};

export default DashboardDefault;
