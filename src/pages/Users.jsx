import Heading from "../ui/Heading";
import SighupForm from "../features/authentication/SighupForm";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>;
      <SighupForm />
    </>
  );
}

export default NewUsers;
