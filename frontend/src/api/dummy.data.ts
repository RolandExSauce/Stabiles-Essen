import { EPantryCategory, ERecipeCategory, IPantryItem, IRecipe } from "../types/components.types";


//replace with backend data 
const recipeData: IRecipe[] = [
    {
        id: 1,
        title: "The Everyday Salad",
        description: "Take your boring salads up a notch. This recipe is perfect for lunch and only contains 5 ingredients!",
        image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        ingredients: [
            { id: 1, name: "Mixed Greens", amount: 2, unit: "cups" },
            { id: 2, name: "Cherry Tomatoes", amount: 1, unit: "cup" },
            { id: 3, name: "Cucumber", amount: 0.5, unit: "" },
            { id: 4, name: "Olive Oil", amount: 2, unit: "tbsp" },
            { id: 5, name: "Lemon Juice", amount: 1, unit: "tbsp" }
        ],
        instructions: [
            "1. Wash all vegetables thoroughly.",
            "2. Chop cucumber into slices.",
            "3. Halve the cherry tomatoes.",
            "4. Combine all ingredients in a bowl",
            "5. Drizzle with olive oil and lemon juice",
            "6. Toss gently and serve immediately."
        ],
        category: ERecipeCategory.SIDE,
        cookTime: 30,
    },
    {
        id: 2,
        title: "Simple Risotto",
        description: "Fear Risotto no more! This simple recipe is perfect for family dinners.",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        ingredients: [
            { id: 6, name: "Arborio Rice", amount: 1, unit: "cup" },
            { id: 7, name: "Chicken Stock", amount: 4, unit: "cups" },
            { id: 8, name: "White Wine", amount: 0.5, unit: "cup" },
            { id: 9, name: "Parmesan Cheese", amount: 0.5, unit: "cup" },
            { id: 10, name: "Butter", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "1. Heat stock in a saucepan",
            "2. Sauté rice in butter until translucent",
            "3. Add wine and cook until absorbed.",
            "4. Add stock one ladle at a time, stirring constantly.",
            "5. When rice is al dente, stir in parmesan.\n6. Season with salt and pepper to taste."
        ],
        category: ERecipeCategory.DINNER,
        cookTime: 30,
    },
    {
        id: 3,
        title: "Simple Risotto",
        description: "Fear Risotto no more! This simple recipe is perfect for family dinners.",
        image: "https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        ingredients: [
            { id: 11, name: "Arborio Rice", amount: 1, unit: "cup" },
            { id: 12, name: "Chicken Stock", amount: 4, unit: "cups" },
            { id: 13, name: "White Wine", amount: 0.5, unit: "cup" },
            { id: 14, name: "Parmesan Cheese", amount: 0.5, unit: "cup" },
            { id: 15, name: "Butter", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "1. Heat stock in a saucepan",
            "2. Sauté rice in butter until translucent",
            "3. Add wine and cook until absorbed",
            "4. Add stock one ladle at a time, stirring constantly",
            "5. When rice is al dente, stir in parmesan",
            "6. Season with salt and pepper to taste"
        ],
        category: ERecipeCategory.DINNER,
        cookTime: 30
    },
    {
        id: 4,
        title: "Simple Risotto",
        description: "Fear Risotto no more! This simple recipe is perfect for family dinners.",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
        ingredients: [
            { id: 16, name: "Arborio Rice", amount: 1, unit: "cup" },
            { id: 17, name: "Chicken Stock", amount: 4, unit: "cups" },
            { id: 18, name: "White Wine", amount: 0.5, unit: "cup" },
            { id: 19, name: "Parmesan Cheese", amount: 0.5, unit: "cup" },
            { id: 20, name: "Butter", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "1. Heat stock in a saucepan",
            "2. Sauté rice in butter until translucent",
            "3. Add wine and cook until absorbe",
            "4. Add stock one ladle at a time, stirring constant",
            "5. When rice is al dente, stir in parmesan",
            "6. Season with salt and pepper to taste",
        ],
        category: ERecipeCategory.DINNER,
        cookTime: 30
    },
    {
        id: 5,
        title: "Simple Risotto",
        description: "Fear Risotto no more! This simple recipe is perfect for family dinners.",
        image: "https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        ingredients: [
            { id: 21, name: "Arborio Rice", amount: 1, unit: "cup" },
            { id: 22, name: "Chicken Stock", amount: 4, unit: "cups" },
            { id: 23, name: "White Wine", amount: 0.5, unit: "cup" },
            { id: 24, name: "Parmesan Cheese", amount: 0.5, unit: "cup" },
            { id: 25, name: "Butter", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "1. Heat stock in a saucepan",
            "2. Sauté rice in butter until translucent",
            "3. Add wine and cook until absorbed",
            "4. Add stock one ladle at a time, stirring constantly",
            "5. When rice is al dente, stir in parmesan",
            "6. Season with salt and pepper to taste."
        ],
        category: ERecipeCategory.BEEF,
        cookTime: 30
    },
    {
        id: 6,
        title: "Simple Risotto",
        description: "Fear Risotto no more! This simple recipe is perfect for family dinners.",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
        ingredients: [
            { id: 26, name: "Arborio Rice", amount: 1, unit: "cup" },
            { id: 27, name: "Chicken Stock", amount: 4, unit: "cups" },
            { id: 28, name: "White Wine", amount: 0.5, unit: "cup" },
            { id: 29, name: "Parmesan Cheese", amount: 0.5, unit: "cup" },
            { id: 30, name: "Butter", amount: 2, unit: "tbsp" }
        ],
        instructions: [
            "1. Heat stock in a saucepan",
            "2. Sauté rice in butter until translucent",
            "3. Add wine and cook until absorbed",
            "4. Add stock one ladle at a time, stirring constantly",
            "5. When rice is al dente, stir in parmesan",
            "6. Season with salt and pepper to taste",
        ],
        category: ERecipeCategory.DINNER,
        cookTime: 30
    }
];


//replace with backend data
const initialPantryItems: IPantryItem[] = [
    {
        id: 1,
        name: "Flour",
        quantity: 500,
        unit: "g",
        category: EPantryCategory.BAKING,
        expiration: "2025-06-15",
    },
    {
        id: 2,
        name: "Eggs",
        quantity: 6,
        unit: "pcs",
        category: EPantryCategory.REFRIGERATED,
        expiration: "2025-04-30",
    },
    {
        id: 3,
        name: "Olive Oil",
        quantity: 750,
        unit: "ml",
        category: EPantryCategory.OILS,
        expiration: "2025-12-10",
    },
    {
        id: 4,
        name: "Salt",
        quantity: 200,
        unit: "g",
        category: EPantryCategory.SPICES,
    },
    {
        id: 5,
        name: "Milk",
        quantity: 1,
        unit: "l",
        category: EPantryCategory.REFRIGERATED,
        expiration: "2025-04-22",
    },
    {
        id: 6,
        name: "Sugar",
        quantity: 100,
        unit: "g",
        category: EPantryCategory.BAKING,
        expiration: "2025-04-22",
    },
];

export { recipeData, initialPantryItems };















