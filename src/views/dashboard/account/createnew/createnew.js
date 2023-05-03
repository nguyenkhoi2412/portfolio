import { hookInstance } from "@utils/hookInstance";
import SignUp from "@authentication/signUp";

const CreateNew = (props) => {
  hookInstance.useDocumentTitle(props.title);
  return (
    <>
      <SignUp />
    </>
  );
};

export default CreateNew;
