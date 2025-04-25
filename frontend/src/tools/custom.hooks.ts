import { useNavigate } from "react-router"


//custom use navigate hook for navigation 
const useNavHook = () => {
    const navigate = useNavigate();
    return {
        toLanding: () => navigate("/"),
        toLogin: () => navigate("/login"),
        toRegister: () => navigate("/register"),

        //sidebar items navigation 
        toHome: () => navigate("/home"),
        toRoute: (route: string) => {
            //prevent navigating to the same route
            if (location.pathname !== `/${route}`) {
                navigate(route.startsWith('/') ? route : `/${route}`);
            }
        },
    };

};



//maybe create more custom hooks here
export {
    useNavHook
};