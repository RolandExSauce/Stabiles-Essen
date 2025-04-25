import { noRecipesFound } from "../../assets/image-icons-barrel";
import SearchInput from "../global/SearchInput";
import Recipes from "./components/Recipes";

//the view to render online recipes user can search through
const OnlineRecipesView = () => {
  //for now this will controll conditional render
  const data = ""; // This would come from your API
  return (
    <div>
      <SearchInput placeHolderText="Search for Recipes online" />

      {data === null ? (
        <img
          src={noRecipesFound}
          alt="No recipes yet"
          style={{
            width: "100%",
            maxWidth: "400px",
            display: "block",
            margin: "0 auto",
            padding: "20px 0",
          }}
        />
      ) : (
        <Recipes recipeFrom="API" />
      )}
    </div>
  );
};
export default OnlineRecipesView;
