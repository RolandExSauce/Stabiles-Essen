import AuthForm from "./layout/AuthForm";
import { registerFormFields } from "../tools/arrays.static";
import { TEventSubmit } from "../types/auth.types";

//register page
const Register = () => {
  //TODO: reuse this method for usage in both login/register
  const handleSubmit = (e: TEventSubmit) => {
    e.preventDefault(); //prevent default
    const form = e.currentTarget; // This is the <form> element
    const formData = new FormData(form); // Easy way to read input values

    const username = formData.get("username"); 
    const email = formData.get("password");
    const password = formData.get("password");

    console.log("username: ", username);
    console.log("email: ", email);
    console.log("password: ", password);
  };

  return (
    <AuthForm
      title="Register"
      fields={registerFormFields}
      buttonLabel="Register"
      footerText="Already registered?"
      footerLinkLabel="Login"
      onSubmit={handleSubmit}
    />
  );
};

export default Register;
