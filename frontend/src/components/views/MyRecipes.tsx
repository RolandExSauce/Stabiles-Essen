import React, { useState, useEffect } from "react";
import CustomBtn from "../global/CustomBtn";
import { notCookingYet } from "../../assets/image-icons-barrel";
import CreateRecipe from "./components/CreateRecipe";
import { IRecipe } from "../../types/components.types";
import { recipeData } from "../../api/dummy.data";
import BaseRecipesView from "./components/BaseRecipesView";


//My recipes
const MyRecipes = () => {
  const [showCreateRecipeForm, setShowCreateRecipeForm] =
    useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [myRecipes, setMyRecipes] = useState<IRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch my recipes
  useEffect(() => {
    const fetchMyRecipes = async () => {
      setIsLoading(true);

      try {
        // Simulate API call with timeout
        await new Promise((resolve) => setTimeout(resolve, 500));

        // For now, use dummy data
        const myRecipesData = recipeData.slice(0, 6);
        //const myRecipesData: IRecipe[] = [];

        setMyRecipes(myRecipesData);
        setError(null);
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError("Failed to load your recipes. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyRecipes();
  }, []);

  // Handle search input change
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  // Handle creating a new recipe
  const handleRecipeCreated = (newRecipe: IRecipe) => {
    setMyRecipes((prevRecipes) => [newRecipe, ...prevRecipes]);
    setShowCreateRecipeForm(false);
  };

  // Handle canceling create form
  const handleCancelCreate = () => {
    setShowCreateRecipeForm(false);
  };

  // My Recipes action buttons
  const actionButtons = (
    <>
      <CustomBtn
        btnText="Create Recipe"
        disabled={false}
        handleClick={() => setShowCreateRecipeForm(true)}
      />
      <CustomBtn btnText="Filter" disabled={false} handleClick={() => {}} />
    </>
  );

  return showCreateRecipeForm ? (
    <div className="create-recipe-container">
      <CreateRecipe
        onCreateRecipe={handleRecipeCreated}
        onCancel={handleCancelCreate}
      />
    </div>
  ) : (
    <BaseRecipesView
      searchPlaceholder="Search through my Recipes"
      recipes={myRecipes}
      isLoading={isLoading}
      error={error}
      searchQuery={searchQuery}
      onSearchChange={handleSearchChange}
      emptyStateImg={notCookingYet}
      emptyStateText="You don't have any recipes yet."
      emptyStateAction={{
        text: "Create Your First Recipe",
        onClick: () => setShowCreateRecipeForm(true),
      }}
      headerActions={actionButtons}
      recipeSource="SELF"
    />
  );
};
export default MyRecipes;
