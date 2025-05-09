import { IRecipeCardProps } from "../../../types/components.types";
import CustomBtn from "../../global/CustomBtn";
import "../styles/RecipeCard.css";


//recipe card component
const RecipeCard: React.FC<IRecipeCardProps> = ({
  recipe,
  onViewRecipe,
}) => {
  return (
    <div className="recipe-card">
      <div className="recipe-card__image-container">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-card__image"
        />
        {recipe.category && (
          <span className="recipe-card__category">{recipe.category}</span>
        )}
      </div>
      <div className="recipe-card__content">
        <h2 className="recipe-card__title">{recipe.title}</h2>

        <div className="recipe-card__meta">
          {recipe.cookTime && (
            <span className="recipe-card__time">
              <i className="icon-cook"></i> Cook: {recipe.cookTime} mins
            </span>
          )}
        </div>

        {recipe.description && (
          <p className="recipe-card__description">
            {recipe.description.length > 120
              ? `${recipe.description.substring(0, 120)}...`
              : recipe.description}
          </p>
        )}
      </div>

      <div className="recipe-card__actions">
        <CustomBtn
          btnText="View Recipe"
          disabled={false}
          handleClick={() => onViewRecipe(recipe.id)}
        />
      </div>
    </div>
  );
};
export default RecipeCard;
