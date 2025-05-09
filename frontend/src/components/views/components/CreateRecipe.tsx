import { ICreateRecipeProps, IIngredient } from "../../../types/components.types";
import "../styles/CreateRecipe.css";
import React, { useState, ChangeEvent } from "react";


//Create recipe Form/Component 
const CreateRecipe: React.FC<ICreateRecipeProps> = ({
  onCreateRecipe,
  onCancel,
}) => {
  const [recipeName, setRecipeName] = useState<string>("");
  const [recipeDescription, setRecipeDescription] = useState<string>("");
  const [cookingTime, setCookingTime] = useState<string>("");
  const [calories, setCalories] = useState<string>("");
  const [servings, setServings] = useState<string>("1");
  const [rating, setRating] = useState<string>("");
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [newIngredient, setNewIngredient] = useState<Omit<IIngredient, "id">>({
    name: "",
    amount: 0,
    unit: "",
  });
  const [instructions, setInstructions] = useState<string>("");
  const [category, setCategory] = useState<string>("Breakfast");

  const handleIngredientChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewIngredient({
      ...newIngredient,
      [name]: value,
    });
  };


  //add ingredient 
  const addIngredient = () => {
    if (newIngredient.name && newIngredient.amount && newIngredient.unit) {
      setIngredients([
        ...ingredients,
        {
          id: Date.now(),
          ...newIngredient,
        },
      ]);
      setNewIngredient({
        name: "",
        amount: 0,
        unit: "",
      });
    }
  };

  //remove ingredients
  const removeIngredient = (id: number) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };


  //create recipe 
  const handleCreateRecipe = () => {
    const recipe = {
      name: recipeName,
      description: recipeDescription,
      cookingTime,
      calories,
      servings,
      rating,
      ingredients,
      instructions,
      category,
    };
    onCreateRecipe(recipe);
  };

  return (
    <div className="create-recipe-container">
      <div className="recipe-header">
        <h2>Create New Recipe</h2>
        <div className="name-description-group">
          <div className="input-group full-width">
            <input
              type="text"
              placeholder="Recipe Name"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              className="recipe-name-input"
            />
          </div>
          <div className="input-group full-width">
            <input
              type="text"
              placeholder="Recipe Description"
              value={recipeDescription}
              onChange={(e) => setRecipeDescription(e.target.value)}
              className="recipe-description-input"
            />
          </div>
        </div>

        <div className="details-group">
          <div className="input-group full-width">
            <input
              type="number"
              placeholder="Cooking Time (MIN)"
              value={cookingTime}
              onChange={(e) => {
                const value = parseInt(e.target.value || "0"); // Fallback to 0 if empty
                if (value > 300) {
                  alert(
                    "Recipes should not be longer than 5 hours (300 minutes)"
                  );
                  return; // Don't update state
                }
                setCookingTime(e.target.value); // Update for valid inputs
              }}
              className="form-input no-spinner"
            />
          </div>

          <div className="input-group full-width">
            <input
              type="number"
              placeholder="Calories (CAL)"
              value={calories}
              onChange={(e) => {
                const value = parseInt(e.target.value || "0");
                if (value > 10000) {
                  alert("Maximum calories allowed is 10000kcal");
                  return;
                }
                setCalories(e.target.value);
              }}
              className="form-input no-spinner"
            />
          </div>

          <div className="input-group full-width">
            <select
              value={servings}
              onChange={(e) => setServings(e.target.value)}
              className="form-input"
            >
              {[...Array(20).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i + 1 === 1 ? "serving" : "servings"}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="ingredients-section">
        <h3>Add the Ingredients needed</h3>
        <div className="ingredients-form">
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Ingredient Name"
            value={newIngredient.name}
            onChange={handleIngredientChange}
            className="ingredient-input full-width"
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            value={newIngredient.amount}
            onChange={handleIngredientChange}
            className="amount-input full-width"
          />
          <input
            type="text"
            name="unit"
            placeholder="Unit"
            value={newIngredient.unit}
            onChange={handleIngredientChange}
            className="unit-input full-width"
          />
          <button
            onClick={addIngredient}
            className="add-btn"
            disabled={
              !newIngredient.name ||
              !newIngredient.amount ||
              !newIngredient.unit
            }
          >
            Add
          </button>
        </div>

        {ingredients.length > 0 && (
          <div className="ingredients-list">
            {ingredients.map((ingredient) => (
              <div key={ingredient.id} className="ingredient-item">
                {ingredient.name} - {ingredient.amount} {ingredient.unit}
                <button
                  className="delete-btn"
                  onClick={() => removeIngredient(ingredient.id)}
                  aria-label="Remove ingredient"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="instructions-section">
        <h3>Instructions</h3>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="instructions-textarea full-width"
          rows={6}
        />
      </div>

      <div className="category-section">
        <div className="category-controls">
          <div className="category-rating-group">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="category-select"
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Dessert">Dessert</option>
              <option value="Snack">Snack</option>
            </select>

            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="rating-select"
            >
              <option value="">Rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>

          <div className="upload-buttons">
            <button className="upload-video-btn">Upload Video</button>

            <button className="upload-btn">Upload Image</button>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button className="cancel-btn full-width" onClick={onCancel}>
          CANCEL
        </button>
        <button
          className="create-btn full-width"
          onClick={handleCreateRecipe}
          disabled={!recipeName || !ingredients.length}
        >
          CREATE RECIPE
        </button>
      </div>
    </div>
  );
};
export default CreateRecipe;
