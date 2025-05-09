import AuthForm from "./layout/AuthForm";
import { registerFormFields } from "../tools/menusAndForms";
import { TEventSubmit } from "../types/auth.types";

//register page
const Register = () => {
  const handleSubmit = (e: TEventSubmit) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

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
