import { RECIPE_ENDPOINTS } from "./constants";
import { axiosInstance } from "../lib/axios";

//make requests using axios 
const fetchUserRecipes = () => axiosInstance.get(RECIPE_ENDPOINTS.GET_USER_RECIPES);
const addRecipe = (recipe: any) => axiosInstance.post(RECIPE_ENDPOINTS.ADD, recipe);
const updateRecipe = (id: string, updatedData: any) =>
    axiosInstance.put(RECIPE_ENDPOINTS.UPDATE(id), updatedData);
const deleteRecipe = (id: string) => axiosInstance.delete(RECIPE_ENDPOINTS.DELETE(id));

export {
    fetchUserRecipes,
    addRecipe,
    updateRecipe,
    deleteRecipe
};
