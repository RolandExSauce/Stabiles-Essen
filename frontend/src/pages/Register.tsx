import AuthForm from "./layout/AuthForm";
import { registerFormFields } from "../config/menusAndForms";
import { TEventSubmit } from "../types/auth.types";
import { useRegister } from "../hooks/useAuth";
import { useNavHook } from "../hooks/utility.hooks";

//register page
const Register = () => {
  const { toHome } = useNavHook();
  const registerMutation = useRegister();

  const handleSubmit = async (e: TEventSubmit) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const credentials = {
      email: String(formData.get("email")),
      username: String(formData.get("username")),
      password: String(formData.get("password")),
    };

    console.log("credentials: ", credentials);

    try {
      const data = await registerMutation.mutateAsync(credentials);
      localStorage.setItem("token", data.token);
      toHome();
    } catch (error) {
      console.error("register failed", error);
    }
  };

  return (
    <AuthForm
      title="Register"
      fields={registerFormFields}
      buttonLabel="Register"
      footerText="Already registered?"
      footerLinkLabel="login"
      onSubmit={handleSubmit}
    />
  );
};
export default Register;
