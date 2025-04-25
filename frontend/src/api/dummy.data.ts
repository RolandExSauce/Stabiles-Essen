import { IRecipe } from "../types/components.types";


// api/dummy.data.ts
const recipeData: IRecipe[] = [
    {
        id: 1,
        title: "The Everyday Salad",
        description: "Take your boring salads up a notch. This recipe is perfect for lunch and only contains 5 ingredients!",
        image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        , ingredients: [
            { name: "Mixed Greens", amount: 2, unit: "cups" },
            { name: "Cherry Tomatoes", amount: 1, unit: "cup" },
            { name: "Cucumber", amount: 0.5, unit: "" },
            { name: "Olive Oil", amount: 2, unit: "tbsp" },
            { name: "Lemon Juice", amount: 1, unit: "tbsp" }
        ],
        instructions: "1. Wash all vegetables thoroughly.\n2. Chop cucumber into slices.\n3. Halve the cherry tomatoes.\n4. Combine all ingredients in a bowl.\n5. Drizzle with olive oil and lemon juice.\n6. Toss gently and serve immediately.",
        category: "Lunch",
        prepTime: 10
    },
    {
        id: 2,
        title: "Simple Risotto",
        description: "Fear Risotto no more! This simple recipe is perfect for family dinners.",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        , ingredients: [
            { name: "Arborio Rice", amount: 1, unit: "cup" },
            { name: "Chicken Stock", amount: 4, unit: "cups" },
            { name: "White Wine", amount: 0.5, unit: "cup" },
            { name: "Parmesan Cheese", amount: 0.5, unit: "cup" },
            { name: "Butter", amount: 2, unit: "tbsp" }
        ],
        instructions: "1. Heat stock in a saucepan.\n2. Sauté rice in butter until translucent.\n3. Add wine and cook until absorbed.\n4. Add stock one ladle at a time, stirring constantly.\n5. When rice is al dente, stir in parmesan.\n6. Season with salt and pepper to taste.",
        category: "Dinner",
        prepTime: 10,
        cookTime: 30
    },
    {
        id: 2,
        title: "Simple Risotto",
        description: "Fear Risotto no more! This simple recipe is perfect for family dinners.",
        image: "https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        , ingredients: [
            { name: "Arborio Rice", amount: 1, unit: "cup" },
            { name: "Chicken Stock", amount: 4, unit: "cups" },
            { name: "White Wine", amount: 0.5, unit: "cup" },
            { name: "Parmesan Cheese", amount: 0.5, unit: "cup" },
            { name: "Butter", amount: 2, unit: "tbsp" }
        ],
        instructions: "1. Heat stock in a saucepan.\n2. Sauté rice in butter until translucent.\n3. Add wine and cook until absorbed.\n4. Add stock one ladle at a time, stirring constantly.\n5. When rice is al dente, stir in parmesan.\n6. Season with salt and pepper to taste.",
        category: "Dinner",
        prepTime: 10,
        cookTime: 30
    },
    {
        id: 2,
        title: "Simple Risotto",
        description: "Fear Risotto no more! This simple recipe is perfect for family dinners.",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
        , ingredients: [
            { name: "Arborio Rice", amount: 1, unit: "cup" },
            { name: "Chicken Stock", amount: 4, unit: "cups" },
            { name: "White Wine", amount: 0.5, unit: "cup" },
            { name: "Parmesan Cheese", amount: 0.5, unit: "cup" },
            { name: "Butter", amount: 2, unit: "tbsp" }
        ],
        instructions: "1. Heat stock in a saucepan.\n2. Sauté rice in butter until translucent.\n3. Add wine and cook until absorbed.\n4. Add stock one ladle at a time, stirring constantly.\n5. When rice is al dente, stir in parmesan.\n6. Season with salt and pepper to taste.",
        category: "Dinner",
        prepTime: 10,
        cookTime: 30
    },
    {
        id: 2,
        title: "Simple Risotto",
        description: "Fear Risotto no more! This simple recipe is perfect for family dinners.",
        image: "https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        , ingredients: [
            { name: "Arborio Rice", amount: 1, unit: "cup" },
            { name: "Chicken Stock", amount: 4, unit: "cups" },
            { name: "White Wine", amount: 0.5, unit: "cup" },
            { name: "Parmesan Cheese", amount: 0.5, unit: "cup" },
            { name: "Butter", amount: 2, unit: "tbsp" }
        ],
        instructions: "1. Heat stock in a saucepan.\n2. Sauté rice in butter until translucent.\n3. Add wine and cook until absorbed.\n4. Add stock one ladle at a time, stirring constantly.\n5. When rice is al dente, stir in parmesan.\n6. Season with salt and pepper to taste.",
        category: "Dinner",
        prepTime: 10,
        cookTime: 30
    },
    {
        id: 2,
        title: "Simple Risotto",
        description: "Fear Risotto no more! This simple recipe is perfect for family dinners.",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
        , ingredients: [
            { name: "Arborio Rice", amount: 1, unit: "cup" },
            { name: "Chicken Stock", amount: 4, unit: "cups" },
            { name: "White Wine", amount: 0.5, unit: "cup" },
            { name: "Parmesan Cheese", amount: 0.5, unit: "cup" },
            { name: "Butter", amount: 2, unit: "tbsp" }
        ],
        instructions: "1. Heat stock in a saucepan.\n2. Sauté rice in butter until translucent.\n3. Add wine and cook until absorbed.\n4. Add stock one ladle at a time, stirring constantly.\n5. When rice is al dente, stir in parmesan.\n6. Season with salt and pepper to taste.",
        category: "Dinner",
        prepTime: 10,
        cookTime: 30
    },
];

export { recipeData };















