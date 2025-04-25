import AuthForm from "./layout/AuthForm";
import { loginFormFields } from "../tools/arrays.static";
import { TEventSubmit } from "../types/auth.types";

//login page
const Login = () => {

  
  const handleSubmit = (e: TEventSubmit) => {
    e.preventDefault(); //prevent default
    const form = e.currentTarget; // This is the <form> element
    const formData = new FormData(form); // Easy way to read input values
  
    const email = formData.get('username');  // Use input placeholder as `name` or better: set `name` attribute explicitly
    const password = formData.get('password');
  
    console.log("email: ", email);
    console.log("password: ", password);
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
