import { useParams } from "react-router";
import { IRecipe } from "../../../types/components.types";
import "../styles/Recipe.css";
import { recipeData } from "../../../api/dummy.data";

//will contain info about a recipe
const Recipe = () => {

    const { id } = useParams<{ id: string }>();
    const recipe = recipeData.find(r => r.id === Number(id)) as IRecipe;
  
    if (!recipe) {
      return <div>Recipe not found</div>;
    };
  


  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <p className="description">{recipe.description}</p>

      <div className="recipe-meta">
        {recipe.prepTime && <span>Prep: {recipe.prepTime} mins</span>}
        {recipe.cookTime && <span>Cook: {recipe.cookTime} mins</span>}
        <span>Category: {recipe.category}</span>
      </div>

      <div className="ingredients-section">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              <strong>{ingredient.name}</strong> - {ingredient.amount}{" "}
              {ingredient.unit}
            </li>
          ))}
        </ul>
      </div>

      <div className="instructions-section">
        <h2>Instructions</h2>
        <div className="instructions">
          {recipe.instructions.split("\n").map((step, i) => (
            <p key={i}>{step}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
