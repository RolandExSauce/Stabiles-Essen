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
    btnText: string;
    disabled: boolean;
    variant?: "primary" | "secondary" | "outline" | "text";
    size?: "small" | "medium" | "large";
    icon?: React.ReactNode;
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset";
    handleClick?: () => void;
};

//for search input
interface ISearchInputProps {
    placeHolderText: string;
    value?: string;
    onChange?: (value: string) => void;
    onSearch?: () => void;
    onKeyPress?: (e: React.KeyboardEvent) => void;
    autoFocus?: boolean;
};

//custom textfield props
interface ICustomTextFieldProps {
    embeddedIconAtStart?: IconProp;
    floatingLabel?: boolean;
    inputProps: {
        id?: string;
        name?: string;
        type: "password" | "text";
        value: string;
        placeHolderTxt?: string;
        helperTxt?: React.ReactNode;
    };
    inputStyle?: React.CSSProperties;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

//category of recipe
enum ERecipeCategory {
    MEAT = "MEAT",
    BEEF = "BEEF",
    CHICKEN = "CHICKEN",
    DESSERT = "DESSERT",
    LAMB = "LAMB",
    MISCELLANEOUS = "MISCELLANEOUS",
    PASTA = "PASTA",
    PORK = "PORK",
    SEAFOOD = "SEAFOOD",
    SIDE = "SIDE",
    STARTER = "STARTER",
    VEGAN = "VEGAN",
    VEGETARIAN = "VEGETARIAN",
    BREAKFAST = "BREAKFAST",
    GOAT = "GOAT",
    SALAD = "SALAD",
    DINNER = "DINNER"
};


//fields on a Recipe 
interface IRecipe {
    id: number;
    title: string;
    description: string;
    image: string;
    ingredients: IIngredient[];
    instructions: string[];
    category: ERecipeCategory;
    cookTime?: number;
};

//fields on an ingredient
interface IIngredient {
    id: number; 
    name: string;
    amount: number;
    unit: string;
};


//category of pantry items  
enum EPantryCategory {
  OTHERS = "OTHERS",
  BAKING = "BAKING",
  REFRIGERATED = "REFRIGERATED",
  SPICES = "SPICES",
  OILS = "OILS",
  CANNED = "CANNED",
  PRODUCE = "PRODUCE"
};


//fields on pantry item 
interface IPantryItem {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  category: EPantryCategory;
  expiration?: string;
};


//for Recipes component
interface IRecipesProps {
    recipeSource: "API" | "SELF"; //wether from user collection or from the API
    recipes: IRecipe[];
    searchQuery?: string;
};


//For base recipe view to render mainly the recipes 
interface IBaseRecipeViewProps {
    title?: string;
    searchPlaceholder: string;
    recipes: IRecipe[];
    isLoading: boolean;
    error: string | null;
    searchQuery: string;
    onSearchChange: (value: string) => void;
    onKeyPress?: (e: React.KeyboardEvent) => void;
    emptyStateImg: string;
    emptyStateText: string;
    emptyStateAction?: {
        text: string;
        onClick: () => void;
    };
    headerActions?: React.ReactNode;
    headerContent?: React.ReactNode;
    recipeSource: "API" | "SELF";
    onRetry?: () => void;
};


//for recipe card component 
interface IRecipeCardProps {
  recipe: IRecipe;
  onViewRecipe: (recipeId: number) => void;
};


//types for Create Recipe form component
interface ICreateRecipeProps {
  onCreateRecipe: (recipe: any) => void;
  onCancel: () => void;
};

//types for ComingSoon Component
interface IComingSoonProps {
  comingSoonDate: string;
};


export {
    IBaseRecipeViewProps,
    ISidebarProps,
    ISearchInputProps,
    ICustomBtnProps,
    ICustomTextFieldProps,
    ISidebarMenuItem,
    IRecipesProps,
    ICreateRecipeProps,
    IRecipe,
    IIngredient,
    IPantryItem,
    ERecipeCategory,
    EPantryCategory,
    IRecipeCardProps,
    IComingSoonProps
};