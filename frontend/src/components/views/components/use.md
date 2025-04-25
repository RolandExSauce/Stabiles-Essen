  const [recipeName, setRecipeName] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [instruction, setInstruction] = useState<string>("");
  const [category, setCategory] = useState<string>("Breakfast");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  // For adding new ingredients
  const [ingredientName, setIngredientName] = useState<string>("");
  const [ingredientAmount, setIngredientAmount] = useState<string>("");
  const [ingredientUnit, setIngredientUnit] = useState<string>("");

  const handleAddIngredient = () => {
    if (ingredientName && ingredientAmount && ingredientUnit) {
      setIngredients([
        ...ingredients,
        {
          name: ingredientName,
          amount: ingredientAmount,
          unit: ingredientUnit,
        },
      ]);
      // Clear input fields
      setIngredientName("");
      setIngredientAmount("");
      setIngredientUnit("");
    }
  };

  const handleCreateRecipe = () => {
    // Here you would typically handle form submission
    console.log({
      recipeName,
      duration,
      rating,
      instruction,
      category,
      ingredients,
    });
    // Reset form or navigate to another page
  };

  const handleCancel = () => {
    // Reset form or navigate back
    console.log("Cancel clicked");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle image upload logic
    console.log("Image upload:", e.target.files);
  };







  
      <CustomTextField
        floatingLabel={true}
        inputProps={{
          id: undefined,
          name: undefined,
          type: "text",
          value: "",
          placeHolderTxt: "Recipe Name",
          helperTxt: undefined,
        }}
      />

      <p>Duration: </p>
      <CustomTextField
        floatingLabel={true}
        inputProps={{
          id: undefined,
          name: undefined,
          type: "text",
          value: "",
          placeHolderTxt: "Hours",
          helperTxt: undefined,
        }}
      />
      <CustomTextField
        floatingLabel={true}
        inputProps={{
          id: undefined,
          name: undefined,
          type: "text",
          value: "",
          placeHolderTxt: "Minutes",
          helperTxt: undefined,
        }}
      />

      <CustomTextField
        floatingLabel={true}
        inputProps={{
          id: undefined,
          name: undefined,
          type: "text",
          value: "",
          placeHolderTxt: "Rating",
          helperTxt: undefined,
        }}
      />