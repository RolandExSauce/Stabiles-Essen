import { EPantryCategory, ERecipeCategory, IPantryItem, IRecipe } from "../types/components.types";


//replace with backend data 
const recipeData: IRecipe[] = [
    {
        id: 7,
        title: "Chick-Fil-A Sandwich",
        description: "A crispy chicken sandwich inspired by the famous fast food chain.",
        image: "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
        ingredients: [
            { id: 31, name: "Chicken Breast", amount: 1, unit: "piece" },
            { id: 32, name: "Burger Bun", amount: 1, unit: "" },
            { id: 33, name: "Pickles", amount: 4, unit: "slices" },
            { id: 34, name: "Flour", amount: 1, unit: "cup" },
            { id: 35, name: "Oil", amount: 2, unit: "cups" }
        ],
        instructions: [
            "1. Coat chicken in seasoned flour.",
            "2. Fry until golden brown.",
            "3. Toast the bun.",
            "4. Assemble sandwich with pickles.",
            "5. Serve hot."
        ],
        category: ERecipeCategory.DINNER,
        cookTime: 25
    },
    {
        id: 8,
        title: "Chicken Couscous",
        description: "A healthy and flavorful dish combining tender chicken with fluffy couscous.",
        image: "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
        ingredients: [
            { id: 36, name: "Chicken Thighs", amount: 2, unit: "" },
            { id: 37, name: "Couscous", amount: 1, unit: "cup" },
            { id: 38, name: "Carrots", amount: 1, unit: "" },
            { id: 39, name: "Onion", amount: 1, unit: "" },
            { id: 40, name: "Spices", amount: 1, unit: "tbsp" }
        ],
        instructions: [
            "1. Sauté onions and carrots.",
            "2. Add chicken and cook thoroughly.",
            "3. Stir in couscous and spices.",
            "4. Cover and let steam.",
            "5. Fluff and serve."
        ],
        category: ERecipeCategory.SIDE,
        cookTime: 35
    },
    {
        id: 9,
        title: "Chicken Fajita Mac and Cheese",
        description: "Creamy mac and cheese meets sizzling fajita chicken in this comfort food fusion.",
        image: "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
        ingredients: [
            { id: 41, name: "Pasta", amount: 2, unit: "cups" },
            { id: 42, name: "Chicken Breast", amount: 1, unit: "" },
            { id: 43, name: "Bell Peppers", amount: 1, unit: "" },
            { id: 44, name: "Cheddar Cheese", amount: 1, unit: "cup" },
            { id: 45, name: "Milk", amount: 1, unit: "cup" }
        ],
        instructions: [
            "1. Cook pasta and set aside.",
            "2. Cook chicken and peppers with fajita seasoning.",
            "3. Make cheese sauce.",
            "4. Mix everything together.",
            "5. Serve warm."
        ],
        category: ERecipeCategory.DINNER,
        cookTime: 30
    },
    {
        id: 10,
        title: "Chicken Ham and Leek Pie",
        description: "A rich and comforting pie with chicken, ham, and leeks in creamy sauce.",
        image: "https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg",
        ingredients: [
            { id: 46, name: "Chicken", amount: 1, unit: "cup" },
            { id: 47, name: "Ham", amount: 0.5, unit: "cup" },
            { id: 48, name: "Leek", amount: 1, unit: "" },
            { id: 49, name: "Cream", amount: 1, unit: "cup" },
            { id: 50, name: "Pie Crust", amount: 1, unit: "" }
        ],
        instructions: [
            "1. Cook chicken, ham, and leeks.",
            "2. Add cream and reduce.",
            "3. Fill into pie crust.",
            "4. Bake until golden.",
            "5. Cool slightly and serve."
        ],
        category: ERecipeCategory.DINNER,
        cookTime: 45
    },
    {
        id: 11,
        title: "Chicken Quinoa Greek Salad",
        description: "A refreshing Mediterranean salad packed with protein and flavor.",
        image: "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg",
        ingredients: [
            { id: 51, name: "Quinoa", amount: 1, unit: "cup" },
            { id: 52, name: "Chicken Breast", amount: 1, unit: "" },
            { id: 53, name: "Feta", amount: 0.5, unit: "cup" },
            { id: 54, name: "Cucumber", amount: 1, unit: "" },
            { id: 55, name: "Olives", amount: 0.25, unit: "cup" }
        ],
        instructions: [
            "1. Cook quinoa and let cool.",
            "2. Grill chicken and slice.",
            "3. Combine all ingredients.",
            "4. Toss with olive oil and lemon.",
            "5. Serve chilled."
        ],
        category: ERecipeCategory.SIDE,
        cookTime: 25
    },
    {
        id: 12,
        title: "General Tsos Chicken",
        description: "A popular Chinese-American dish with crispy chicken in a tangy-sweet sauce.",
        image: "https://www.themealdb.com/images/media/meals/1529444113.jpg",
        ingredients: [
            { id: 56, name: "Chicken Thighs", amount: 2, unit: "" },
            { id: 57, name: "Soy Sauce", amount: 2, unit: "tbsp" },
            { id: 58, name: "Cornstarch", amount: 1, unit: "tbsp" },
            { id: 59, name: "Garlic", amount: 2, unit: "cloves" },
            { id: 60, name: "Sugar", amount: 1, unit: "tbsp" }
        ],
        instructions: [
            "1. Coat chicken in cornstarch.",
            "2. Fry until crispy.",
            "3. Make sauce with soy, garlic, and sugar.",
            "4. Toss chicken in sauce.",
            "5. Serve over rice."
        ],
        category: ERecipeCategory.DINNER,
        cookTime: 35
    },
    {
        id: 13,
        title: "Honey Balsamic Chicken with Crispy Broccoli & Potatoes",
        description: "An easy sheet pan dinner with sweet and savory flavors.",
        image: "https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg",
        ingredients: [
            { id: 61, name: "Chicken Thighs", amount: 2, unit: "" },
            { id: 62, name: "Broccoli", amount: 1, unit: "cup" },
            { id: 63, name: "Potatoes", amount: 2, unit: "" },
            { id: 64, name: "Balsamic Vinegar", amount: 2, unit: "tbsp" },
            { id: 65, name: "Honey", amount: 1, unit: "tbsp" }
        ],
        instructions: [
            "1. Toss ingredients with oil, vinegar, and honey.",
            "2. Bake until crispy.",
            "3. Plate and drizzle with extra sauce.",
            "4. Serve hot."
        ],
        category: ERecipeCategory.DINNER,
        cookTime: 40
    },
    {
        id: 14,
        title: "Katsu Chicken Curry",
        description: "A Japanese favorite – crispy chicken cutlets with a rich curry sauce.",
        image: "https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg",
        ingredients: [
            { id: 66, name: "Chicken Breast", amount: 1, unit: "" },
            { id: 67, name: "Breadcrumbs", amount: 1, unit: "cup" },
            { id: 68, name: "Egg", amount: 1, unit: "" },
            { id: 69, name: "Flour", amount: 0.5, unit: "cup" },
            { id: 70, name: "Curry Sauce", amount: 1, unit: "cup" }
        ],
        instructions: [
            "1. Bread the chicken.",
            "2. Fry until golden and crispy.",
            "3. Heat curry sauce.",
            "4. Slice chicken and serve with rice and sauce."
        ],
        category: ERecipeCategory.DINNER,
        cookTime: 35
    },
    {
        id: 15,
        title: "Rappie Pie",
        description: "A traditional Acadian dish made with grated potatoes and meat.",
        image: "https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg",
        ingredients: [
            { id: 71, name: "Potatoes", amount: 4, unit: "" },
            { id: 72, name: "Chicken", amount: 1, unit: "cup" },
            { id: 73, name: "Onion", amount: 1, unit: "" },
            { id: 74, name: "Butter", amount: 2, unit: "tbsp" },
            { id: 75, name: "Broth", amount: 1, unit: "cup" }
        ],
        instructions: [
            "1. Grate and squeeze potatoes.",
            "2. Mix with broth.",
            "3. Layer with chicken and onions.",
            "4. Bake until golden.",
            "5. Serve warm."
        ],
        category: ERecipeCategory.DINNER,
        cookTime: 50
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















