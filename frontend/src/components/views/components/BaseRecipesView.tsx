import { IBaseRecipeViewProps, IRecipe } from "../../../types/components.types";
import CustomBtn from "../../global/CustomBtn";
import SearchInput from "../../global/SearchInput";
import Recipes from "./Recipes";
import "../styles/BaseRecipeView.css";


//base recipe view, will render the recipe list along with the search input field 
const BaseRecipesView: React.FC<IBaseRecipeViewProps> = ({
  title,
  searchPlaceholder,
  recipes,
  isLoading,
  error,
  searchQuery,
  onSearchChange,
  onKeyPress,
  emptyStateImg,
  emptyStateText,
  emptyStateAction,
  headerActions,
  headerContent,
  recipeSource,
  onRetry = () => window.location.reload(),
}) => {
  return (
    <div className="base-recipe-view">
      {title && (
        <h1 className="recipe-view-title">{title}</h1>
      )}
      
      <div className="recipe-view-header">
        {headerContent}
        
        <div className="search-container">
          <SearchInput 
            placeHolderText={searchPlaceholder} 
            onChange={onSearchChange}
            value={searchQuery}
            onKeyPress={onKeyPress}
          />
        </div>
        
        {headerActions && (
          <div className="actions-container">
            {headerActions}
          </div>
        )}
      </div>
      
      <div className="recipe-view-content">
        {isLoading ? (
          <div className="recipe-view-loading">
            <p>Loading recipes...</p>
          </div>
        ) : error ? (
          <div className="recipe-view-error">
            <p>{error}</p>
            <CustomBtn
              btnText="Try Again"
              disabled={false}
              handleClick={onRetry}
            />
          </div>
        ) : recipes.length === 0 ? (
          <div className="no-recipes-container">
            <img
              src={emptyStateImg}
              alt="No recipes found"
              className="no-recipes-image"
            />
            <p>{emptyStateText}</p>
            {emptyStateAction && (
              <CustomBtn
                btnText={emptyStateAction.text}
                disabled={false}
                handleClick={emptyStateAction.onClick}
              />
            )}
          </div>
        ) : (
          <Recipes 
            recipeSource={recipeSource}
            recipes={recipes}
            searchQuery={recipeSource === "SELF" ? searchQuery : ""}
          />
        )}
      </div>
    </div>
  );
};
export default BaseRecipesView;