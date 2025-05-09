import AuthForm from "./layout/AuthForm";
import { loginFormFields } from "../tools/menusAndForms";
import { TEventSubmit } from "../types/auth.types";

//login page
const Login = () => {
  const handleSubmit = (e: TEventSubmit) => {
    e.preventDefault(); //prevent default
    const form = e.currentTarget;
    const formData = new FormData(form); //read input values

    const email = formData.get("username");
    const password = formData.get("password");

    // console.log("email: ", email);
    // console.log("password: ", password);
  };

  return (
    <AuthForm
      title="Login"
      fields={loginFormFields}
      buttonLabel="Login"
      footerText="Don't have an account?"
      footerLinkLabel="Register"
      onSubmit={handleSubmit}
    />
  );
};
export default Login;
