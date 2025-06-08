import React, { useState, useEffect } from "react";
import { recipeData } from "../../../api/dummy.data";
import { useNavHook } from "../../../hooks/utility.hooks";
import { IRecipesProps, IRecipe } from "../../../types/components.types";
import RecipeCard from "./RecipeCard";
import "../styles/Recipes.css";

//recipes component
const Recipes: React.FC<IRecipesProps> = ({
  recipeSource,
  searchQuery = "",
  recipes = recipeData, // Allow passing custom recipes or use dummy data
}) => {
  const { toRoute } = useNavHook();
  const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>(recipes);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Effect to filter recipes when search query changes
  useEffect(() => {
    if (!searchQuery) {
      setFilteredRecipes(recipes);
      return;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(lowerCaseQuery) ||
        (recipe.description &&
          recipe.description.toLowerCase().includes(lowerCaseQuery)) ||
        recipe.category.toLowerCase().includes(lowerCaseQuery)
    );

    setFilteredRecipes(filtered);
  }, [searchQuery, recipes]);

  const handleViewRecipe = (recipeId: number) => {
    toRoute(
      `${
        recipeSource === "API" ? "online-recipes" : "my-recipes"
      }/recipe/${recipeId}`
    );
  };

  if (isLoading) {
    return <div className="recipes-loading">Loading recipes...</div>;
  }

  if (filteredRecipes.length === 0) {
    return (
      <div className="recipes-empty">
        <p>No recipes found. Try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="recipes-grid">
      {filteredRecipes.map((recipe) => (
        <div className="recipes-grid-item" key={recipe.id}>
          <RecipeCard recipe={recipe} onViewRecipe={handleViewRecipe} />
        </div>
      ))}
    </div>
  );
};

export default Recipes;
