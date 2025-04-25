
// import CustomTextField from "../../global/CustomTextField";
import { IIngredient } from '../../../types/components.types';
import '../styles/CreateRecipe.css'
import React, { useState, ChangeEvent } from 'react';




const CreateRecipe: React.FC = () => {
  const [recipeName, setRecipeName] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [newIngredient, setNewIngredient] = useState<Omit<IIngredient, 'id'>>({
    name: '',
    amount: '',
    unit: '',
  });
  const [instructions, setInstructions] = useState<string>('');
  const [category, setCategory] = useState<string>('Breakfast');

  const handleIngredientChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewIngredient({
      ...newIngredient,
      [name]: value,
    });
  };

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
        name: '',
        amount: '',
        unit: '',
      });
    }
  };

  const handleCreateRecipe = () => {
    // Handle form submission
    const recipe = {
      name: recipeName,
      duration,
      rating,
      ingredients,
      instructions,
      category,
    };
    
    console.log('Creating recipe:', recipe);
    // Submit to your API or state management here
  };

  const handleCancel = () => {
    // Reset form or navigate away
    console.log('Operation canceled');
  };

  return (
    <div className="create-recipe-container">
      <div className="recipe-header">
        <div className="input-group">
          <input
            type="text"
            placeholder="Recipe Name"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            className="recipe-name-input"
          />
        </div>
        
        <div className="duration-rating-group">
          <div className="duration-group">
            <input
              type="number"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="duration-input"
            />
            <div className="min-label">MIN</div>
          </div>
          
          <div className="rating-group">
            <div className="rating-label">Rating</div>
            <select 
              value={rating} 
              onChange={(e) => setRating(e.target.value)}
              className="rating-select"
            >
              <option value="">Select</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
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
            placeholder="IngredientName"
            value={newIngredient.name}
            onChange={handleIngredientChange}
            className="ingredient-input"
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            value={newIngredient.amount}
            onChange={handleIngredientChange}
            className="amount-input"
          />
          <input
            type="text"
            name="unit"
            placeholder="Unit"
            value={newIngredient.unit}
            onChange={handleIngredientChange}
            className="unit-input"
          />
          <button 
            onClick={addIngredient}
            className="add-btn"
          >
            add
          </button>

          addPlusIcon 
        </div>

        {ingredients.length > 0 && (
          <div className="ingredients-list">
            {ingredients.map((ingredient) => (
              <div key={ingredient.id} className="ingredient-item">
                {ingredient.name} - {ingredient.amount} {ingredient.unit}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="instructions-section">
        <h3>Instruction</h3>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="instructions-textarea"
          rows={6}
        />
      </div>

      <div className="category-section">
        <div className="category-label">SelectCategory</div>
        <div className="category-controls">
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
          
          <button className="upload-btn">
            Upload Image
          </button>
        </div>
      </div>

      <div className="action-buttons">
        <button 
          className="cancel-btn"
          onClick={handleCancel}
        >
          CANCEL
        </button>
        <button 
          className="create-btn"
          onClick={handleCreateRecipe}
        >
          CREATE RECIPE
        </button>
      </div>
    </div>
  );
};

export default CreateRecipe;
