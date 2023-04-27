import { hooksInstance } from "@utils/hooksInstance";
import SignUp from "@authentication/signUp";

const CreateNew = (props) => {
  hooksInstance.useDocumentTitle(props.title);
  return (
    <>
      <SignUp />
    </>
  );
};

export default CreateNew;
