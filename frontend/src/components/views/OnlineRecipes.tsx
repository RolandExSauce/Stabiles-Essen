import React, { useState, useEffect } from "react";
import CustomBtn from "../global/CustomBtn";
import { noRecipesFound } from "../../assets/image-icons-barrel";
import { IRecipe } from "../../types/components.types";
import { recipeData } from "../../api/dummy.data";
import BaseRecipeView from "./components/BaseRecipesView";

//Online recipe view
const OnlineRecipes = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [onlineRecipes, setOnlineRecipes] = useState<IRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch online recipes
  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);

      try {
        // Simulate API call with timeout
        await new Promise((resolve) => setTimeout(resolve, 700));

        // For now, use dummy data
        const onlineRecipeData = recipeData.slice(0, 3);
        //const onlineRecipeData: IRecipe[] = [];
        setOnlineRecipes(onlineRecipeData);
        setError(null);
      } catch (err) {
        console.error("Error fetching online recipes:", err);
        setError("Failed to load recipes. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Handle search input change
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  // Handle search submission
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    try {
      // Simulate API search with timeout
      await new Promise((resolve) => setTimeout(resolve, 500));

      // For demo, just filter the existing recipes
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = recipeData.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(lowerCaseQuery) ||
          (recipe.description &&
            recipe.description.toLowerCase().includes(lowerCaseQuery)) ||
          recipe.category.toLowerCase().includes(lowerCaseQuery)
      );

      setOnlineRecipes(filtered);
      setError(null);
    } catch (err) {
      console.error("Error searching recipes:", err);
      setError("Failed to search recipes. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  // Handle search on Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Custom header with search button
  const searchButton = (
    <CustomBtn
      btnText={isSearching ? "Searching..." : "Search"}
      disabled={isSearching || !searchQuery.trim()}
      handleClick={handleSearch}
    />
  );

  const headerContent = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginBottom: "24px",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: 700,
          color: "var(--bg-and-white)",
        }}
      >
        Discover Recipes
      </h1>
    </div>
  );

  return (
    <BaseRecipeView
      searchPlaceholder="Search for Recipes online"
      recipes={onlineRecipes}
      isLoading={isLoading}
      error={error}
      searchQuery={searchQuery}
      onSearchChange={handleSearchChange}
      onKeyPress={handleKeyPress}
      emptyStateImg={noRecipesFound}
      emptyStateText={`No recipes found ${
        searchQuery ? ` for "${searchQuery}"` : ""
      }`}
      headerActions={searchButton}
      headerContent={headerContent}
      recipeSource="API"
    />
  );
};

export default OnlineRecipes;
