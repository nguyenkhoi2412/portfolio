import { hooksInstance } from "@utils/hooksInstance";
import SignUp from "@authentication/signUp";

const DashboardDefault = (props) => {
  hooksInstance.useDocumentTitle(props.title);
  return (
    <>
      <SignUp />
    </>
  );
};

export default DashboardDefault;
