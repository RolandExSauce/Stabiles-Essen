import AuthForm from "./layout/AuthForm";
import { loginFormFields } from "../config/menusAndForms";
import { TEventSubmit } from "../types/auth.types";
import { useLogin } from "../hooks/useAuth";
import { useNavHook } from "../hooks/utility.hooks";

//login page
const Login = () => {
  const { toHome } = useNavHook();
  const loginMutation = useLogin();

  const handleSubmit = async (e: TEventSubmit) => {
    e.preventDefault(); //prevent default
    const form = e.currentTarget;
    const formData = new FormData(form); //read input values

    const credentials = {
      username: String(formData.get("username")),
      password: String(formData.get("password")),
    };

    console.log("login: ", credentials)
    try {
      const data = await loginMutation.mutateAsync(credentials);
      localStorage.setItem("token", data.token); // store token

      console.log("url: ", import.meta.env.VITE_API_URL);
      toHome();
    } catch (error) {
      console.error("Login failed", error);
    }
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
