import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IRecipe } from "../../../types/components.types";
import { recipeData } from "../../../api/dummy.data";
import CustomBtn from "../../global/CustomBtn";
import "../styles/Recipe.css";


//Recipe Component
const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call with a slight delay
    setIsLoading(true);

    setTimeout(() => {
      try {
        const foundRecipe = recipeData.find((r) => r.id === Number(id));

        if (foundRecipe) {
          setRecipe(foundRecipe);
          setError(null);
        } else {
          setError("Recipe not found");
        }
      } catch (err) {
        setError("Error loading recipe");
      } finally {
        setIsLoading(false);
      }
    }, 300);
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <div className="recipe-loading">Loading recipe details...</div>;
  }

  if (error || !recipe) {
    return (
      <div className="recipe-error">
        <h2>{error || "Recipe not found"}</h2>
        <CustomBtn
          btnText="Go Back"
          disabled={false}
          handleClick={handleGoBack}
        />
      </div>
    );
  }

  return (
    <div className="recipe-detail">
      <div className="recipe-detail__header">
        <button className="recipe-detail__back-btn" onClick={handleGoBack}>
          &larr; Back
        </button>
        <h1 className="recipe-detail__title">{recipe.title}</h1>

        <div className="recipe-detail__meta">
          {recipe.cookTime && (
            <span className="recipe-detail__time">
              Cook: {recipe.cookTime} mins
            </span>
          )}
          <span className="recipe-detail__category">
            Category: {recipe.category}
          </span>
        </div>
      </div>

      <div className="recipe-detail__content">
        <div className="recipe-detail__main">
          <div className="recipe-detail__image-container">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-detail__image"
            />
          </div>

          {recipe.description && (
            <div className="recipe-detail__description">
              <h2>Description</h2>
              <p>{recipe.description}</p>
            </div>
          )}

          <div className="recipe-detail__instructions">
            <h2>Instructions</h2>
            <div className="recipe-detail__steps">
              {recipe.instructions.map((step, i) => (
                <div className="recipe-detail__step" key={i}>
                  <span className="recipe-detail__step-number">{i + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="recipe-detail__sidebar">
          <div className="recipe-detail__ingredients">
            <h2>Ingredients</h2>
            <ul className="recipe-detail__ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="recipe-detail__ingredient">
                  <span className="recipe-detail__ingredient-name">
                    {ingredient.name}
                  </span>
                  <span className="recipe-detail__ingredient-amount">
                    {ingredient.amount} {ingredient.unit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
