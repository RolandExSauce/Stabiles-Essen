//login payload 
interface ILogin {
  username: string;
  password: string;
};

//register payload 
interface IRegister {
  username: string;
  email: string;
  password: string;
};

//for the form fields 
type TAuthForm = {
    type: React.HTMLInputTypeAttribute;
    name: string; 
    placeholder: string;
    icon: string;
};

//put here so that we dont have 
type TEventSubmit = React.FormEvent<HTMLFormElement>;

//types for props on AuthForm component
interface IAuthForm {
    title: string;
    fields: TAuthForm[];
    buttonLabel: string;
    footerText: string;
    footerLinkLabel: string;
    err?: string; 
    onSubmit?: (e: TEventSubmit) => void; //will handle the form submit 
};

export {
    IAuthForm,
    TAuthForm,
    TEventSubmit,
    IRegister,
    ILogin,
};