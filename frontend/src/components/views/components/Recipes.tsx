import { recipeData } from "../../../api/dummy.data";
import { useNavHook } from "../../../tools/custom.hooks";
import { IRecipesProps } from "../../../types/components.types";
import "../styles/Recipes.css";

//TODO: should accept recipe data as prop so that it can be resused
const Recipes: React.FC<IRecipesProps> = ({ recipeFrom }) => {
  const { toRoute } = useNavHook();

  const handleViewRecipe = (recipeId: number) => {
    //when navigating to recipe (Recipe Compoent), pass id as url parameter
    toRoute(
      `${
        recipeFrom === "API" ? "online-recipes" : "my-recipes"
      }/recipe/${recipeId}`
    );
  };

  return (
    <div className="recipes-container">
      {recipeData.map((recipe, index) => (
        <div className="card" key={index}>
          <div className="card__body">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="card__image"
            />
            <h2 className="card__title">{recipe.title}</h2>
            {/* <p className="card__description">{recipe.description}</p> */}
          </div>
          {/* TODO: Customm Button here */}
          <button
            className="card__btn"
            onClick={() => {
              handleViewRecipe(recipe.id);
            }}
          >
            View Recipe
          </button>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
