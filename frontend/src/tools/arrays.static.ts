import {
    emailIcon, lockIcon,
    pantryIcon, onlineRecipeIcon,
    cookRecipe, shoppingBasketIcon,
    userIcon
} from "../assets/image-icons-barrel";
import { TAuthForm } from "../types/auth.types";
import { ISidebarMenuItem } from "../types/components.types";



//fields for register to pass to AuthForm
const registerFormFields: TAuthForm[] = [
    { type: "text", placeholder: "Username", icon: userIcon },
    { type: "email", placeholder: "E-Mail Address", icon: emailIcon },
    { type: "password", placeholder: "Password", icon: lockIcon },
];

//same for login 
const loginFormFields: TAuthForm[] = [
    { type: "text", placeholder: "Username", icon: userIcon },
    { type: "password", placeholder: "Password", icon: lockIcon },
];


//sidebar menu items
const sidebarMenuItems: ISidebarMenuItem[] = [
    { icon: shoppingBasketIcon, itemName: "My Shopping List", itemAltAndRoute: "shopping-list", isLargeIcon: false },
    { icon: pantryIcon, itemName: "My Pantry", itemAltAndRoute: "pantry", isLargeIcon: false },
    { icon: onlineRecipeIcon, itemName: "Online Recipes", itemAltAndRoute: "online-recipes", isLargeIcon: true },
    { icon: cookRecipe, itemName: "My Recipes", itemAltAndRoute: "my-recipes", isLargeIcon: true },
];


export {
    registerFormFields,
    loginFormFields,
    sidebarMenuItems
};