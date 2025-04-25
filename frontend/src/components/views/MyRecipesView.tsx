import React from "react";
import SearchInput from "../global/SearchInput";
import Recipes from "./components/Recipes";
import CustomBtn from "../global/CustomBtn";
import { noRecipesFound } from "../../assets/image-icons-barrel";
import { useNavHook } from "../../tools/custom.hooks";

//view of my recipes
const MyRecipesView = () => {
  const { toRoute } = useNavHook();

  //for now this will controll conditional render
  const data = ""; // This would come from your API

  //TODO: disable state of buttons based on data availabilty
  return (
    <div>
      {/* Search and Buttons Row - remains unchanged */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          marginBottom: "24px",
        }}
      >
        <div style={{ flex: "1 1 100px", minWidth: "200px" }}>
          <SearchInput placeHolderText="Search through my Recipes" />
        </div>
        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <CustomBtn
            btnText="Create Recipe"
            disabled={false}
            handleClick={() => {
              toRoute("my-recipes/create-recipe");
            }}
          />
          <CustomBtn btnText="Filter Recipe" disabled={false} />
          <CustomBtn btnText="Select" disabled={false} />
        </div>
      </div>

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
        <Recipes recipeFrom="SELF" />
      )}
    </div>
  );
};

export default MyRecipesView;
