

//for the form fields 
type TAuthForm = {
    type: React.HTMLInputTypeAttribute;
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
    onSubmit?: (e: TEventSubmit) => void; //will handle the form submit 
};



export {
    IAuthForm,
    TAuthForm,
    TEventSubmit
}