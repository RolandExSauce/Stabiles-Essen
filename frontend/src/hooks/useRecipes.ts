import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as recipeApi from "../api/recipe.api";

// GET user recipes
export const useUserRecipes = () =>
  useQuery({
    queryKey: ["user-recipes"],
    queryFn: async () => {
      const res = await recipeApi.fetchUserRecipes();
      return res.data;
    },
  });

// POST new recipe
export const useAddRecipe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: recipeApi.addRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-recipes"] });
    },
  });
};

// PUT update recipe
export const useUpdateRecipe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      recipeApi.updateRecipe(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-recipes"] });
    },
  });
};

// DELETE recipe
export const useDeleteRecipe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => recipeApi.deleteRecipe(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-recipes"] });
    },
  });
};
