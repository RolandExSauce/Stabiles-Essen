import AuthForm from "./layout/AuthForm";
import { registerFormFields } from "../config/menusAndForms";
import { IRegister } from "../types/auth.types";
import { useRegister } from "../hooks/useAuth";
import { useAuthForm } from "../hooks/useAuthFormReturn";

//register page
const Register = () => {
  const registerMutation = useRegister();
  const { err, handleSubmit } = useAuthForm<IRegister>();
  return (
    <AuthForm
      title="Register"
      fields={registerFormFields}
      buttonLabel="Register"
      footerText="Already registered?"
      footerLinkLabel="login"
      err={err}
      onSubmit={handleSubmit(registerMutation.mutateAsync, [
        "email",
        "username",
        "password",
      ])}
    />
  );
};
export default Register;
