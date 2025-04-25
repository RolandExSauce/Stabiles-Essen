import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties } from "react";

//for sidebar 
interface ISidebarProps {
    onToggle: (isMinimized: boolean) => void;
};

//for a sidebar item in sidebar 
interface ISidebarMenuItem {
    icon: string;
    itemName: string;
    itemAltAndRoute: string;
    isLargeIcon?: boolean;
};


//custom button props
interface ICustomBtnProps {
    handleClick?: () => void;
    disabled: boolean;
    btnText?: string;
    buttonIcon?: string; //for now let's just go with string
    // React.FunctionComponent<
    //   React.SVGProps<SVGSVGElement> & {
    //     title?: string;
    //   }
    // >;
    buttonStyleOptions?: {
        buttonStyles?: CSSProperties;
        buttonTxtStyles?: CSSProperties;
        iconStyles?: CSSProperties;
    };
    buttonType?: 'submit' | 'button' | 'reset';
    roundButtonBorders?: boolean; //borders are rounded
};


//for search input, for now just placeholder text
//TODO: add handle search button ?
interface ISearchInputProps {
    placeHolderText: string;
};


//custom textfield props
interface ICustomTextFieldProps {
    //embeddedIconAtStart?: IconDefinition;
    embeddedIconAtStart?: IconProp; //TODO: for now also lets just go with a string
    floatingLabel?: boolean;
    inputProps: {
        id?: string; //optional 
        name?: string; //optional
        type: "password" | "text";
        value: string;
        placeHolderTxt?: string; //optional
        helperTxt?: React.ReactNode;
    };
    inputStyle?: React.CSSProperties;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


//fields on a Recipe 
interface IRecipe {
    id: number;
    title: string;
    description: string;
    image: string;
    ingredients: {
        name: string;
        amount: number;
        unit: string;
    }[];
    instructions: string;
    category: string;
    prepTime?: number; // in minutes ?
    cookTime?: number; // in minutes ?
};


//fields on an ingredient
interface IIngredient {
    id: number;
    name: string;
    amount: string;
    unit: string;
};


//for Recipes component
interface IRecipesProps {
    recipeFrom: "API" | "SELF" //wether recipes are coming from api or the ones I created 
};




export {
    ISidebarProps,
    ISearchInputProps,
    ICustomBtnProps,
    ICustomTextFieldProps,
    ISidebarMenuItem,
    IRecipesProps,
    IRecipe,
    IIngredient
};