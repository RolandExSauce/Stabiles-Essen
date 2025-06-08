import AuthForm from "./layout/AuthForm";
import { loginFormFields } from "../config/menusAndForms";
import { ILogin } from "../types/auth.types";
import { useLogin } from "../hooks/useAuth";
import { useAuthForm } from "../hooks/useAuthFormReturn";

//login page
const Login = () => {
  const loginMutation = useLogin();
  const { err, handleSubmit } = useAuthForm<ILogin>();
  return (
    <AuthForm
      title="Login"
      fields={loginFormFields}
      buttonLabel="Login"
      footerText="Don't have an account?"
      footerLinkLabel="Register"
      err={err}
      onSubmit={handleSubmit(loginMutation.mutateAsync, [
        "username",
        "password",
      ])}
    />
  );
};
export default Login;
