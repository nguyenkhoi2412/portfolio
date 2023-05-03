import { hookInstance } from "@utils/hookInstance";
import SignUp from "@authentication/signUp";

const DashboardDefault = (props) => {
  hookInstance.useDocumentTitle(props.title);
  return (
    <>
      <SignUp />
    </>
  );
};

export default DashboardDefault;
