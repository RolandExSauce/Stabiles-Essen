import {
    emailIcon, lockIcon,
    pantryIcon, onlineRecipeIcon,
    cookRecipe, shoppingBasketIcon,
    userIcon,
    homeIcon
} from "../assets/image-icons-barrel";
import { TAuthForm } from "../types/auth.types";
import { ISidebarMenuItem } from "../types/components.types";


//fields for register to pass to AuthForm
const registerFormFields: TAuthForm[] = [
    { type: "email", name: "email", placeholder: "E-Mail Address", icon: emailIcon },
    { type: "text", name: "username", placeholder: "Username", icon: userIcon },
    { type: "password", name: "password", placeholder: "Password", icon: lockIcon },
];

//same for login 
const loginFormFields: TAuthForm[] = [
    { type: "text", name: "username", placeholder: "Username", icon: userIcon },
    { type: "text", name: "password", placeholder: "Password", icon: lockIcon },
];


//sidebar menu items
const sidebarMenuItems: ISidebarMenuItem[] = [
    { icon: homeIcon, itemName: "Home", itemAltAndRoute: "home" },
    { icon: shoppingBasketIcon, itemName: "Shopping List", itemAltAndRoute: "shopping-list" },
    { icon: pantryIcon, itemName: "My Pantry", itemAltAndRoute: "pantry" },
    { icon: onlineRecipeIcon, itemName: "Find Online", itemAltAndRoute: "online-recipes" },
    { icon: cookRecipe, itemName: "My Recipes", itemAltAndRoute: "my-recipes" },
];

export {
    registerFormFields,
    loginFormFields,
    sidebarMenuItems
};