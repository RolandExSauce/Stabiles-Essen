import React, { useState, useEffect } from 'react';
import '../styles/MyPantry.css';

interface PantryItem {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  expiration?: string;
}

// Mock data - replace with your API call
const initialPantryItems: PantryItem[] = [
  { id: 1, name: 'Flour', quantity: 500, unit: 'g', category: 'Baking', expiration: '2025-06-15' },
  { id: 2, name: 'Eggs', quantity: 6, unit: 'pcs', category: 'Refrigerated', expiration: '2025-04-30' },
  { id: 3, name: 'Olive Oil', quantity: 750, unit: 'ml', category: 'Oils', expiration: '2025-12-10' },
  { id: 4, name: 'Salt', quantity: 200, unit: 'g', category: 'Spices' },
  { id: 5, name: 'Milk', quantity: 1, unit: 'l', category: 'Refrigerated', expiration: '2025-04-22' },
];

const MyPantry: React.FC = () => {
  const [pantryItems, setPantryItems] = useState<PantryItem[]>(initialPantryItems);
  const [filteredItems, setFilteredItems] = useState<PantryItem[]>(initialPantryItems);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [newItem, setNewItem] = useState<Omit<PantryItem, 'id'>>({
    name: '',
    quantity: 0,
    unit: '',
    category: 'Other',
  });

  // Get unique categories for filter
  const categories = ['All', ...Array.from(new Set(pantryItems.map(item => item.category)))];

  useEffect(() => {
    let result = [...pantryItems];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      result = result.filter(item => item.category === selectedCategory);
    }
    
    setFilteredItems(result);
  }, [searchTerm, selectedCategory, pantryItems]);

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity > 0 && newItem.unit) {
      const newId = Math.max(...pantryItems.map(item => item.id), 0) + 1;
      setPantryItems([...pantryItems, { ...newItem, id: newId }]);
      setNewItem({
        name: '',
        quantity: 0,
        unit: '',
        category: 'Other',
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteItem = (id: number) => {
    setPantryItems(pantryItems.filter(item => item.id !== id));
  };

  const isExpiringSoon = (date?: string) => {
    if (!date) return false;
    const expirationDate = new Date(date);
    const today = new Date();
    const diffTime = expirationDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays >= 0;
  };

  const isExpired = (date?: string) => {
    if (!date) return false;
    const expirationDate = new Date(date);
    const today = new Date();
    return expirationDate < today;
  };

  return (
    <div className="pantry-container">
      <div className="pantry-header">
        <h1>My Goated Pantry</h1>
        <button 
          className="add-ingredient-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : '+ Add Ingredient'}
        </button>
      </div>

      {showAddForm && (
        <div className="add-ingredient-form">
          <input
            type="text"
            placeholder="Ingredient name"
            value={newItem.name}
            onChange={(e) => setNewItem({...newItem, name: e.target.value})}
          />
          <div className="quantity-unit-group">
            <input
              type="number"
              placeholder="Quantity"
              value={newItem.quantity || ''}
              onChange={(e) => setNewItem({...newItem, quantity: Number(e.target.value)})}
            />
            <input
              type="text"
              placeholder="Unit (g, ml, pcs)"
              value={newItem.unit}
              onChange={(e) => setNewItem({...newItem, unit: e.target.value})}
            />
          </div>
          <div className="category-expiry-group">
            <select
              value={newItem.category}
              onChange={(e) => setNewItem({...newItem, category: e.target.value})}
            >
              <option value="Baking">Baking</option>
              <option value="Refrigerated">Refrigerated</option>
              <option value="Spices">Spices</option>
              <option value="Oils">Oils</option>
              <option value="Canned">Canned</option>
              <option value="Produce">Produce</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="date"
              placeholder="Expiration date (optional)"
              onChange={(e) => setNewItem({...newItem, expiration: e.target.value})}
            />
          </div>
          <button 
            className="save-ingredient-btn"
            onClick={handleAddItem}
          >
            Add to Pantry
          </button>
        </div>
      )}

      <div className="pantry-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="category-filter">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="pantry-stats">
        <div className="stat-box">
          <span className="stat-value">{pantryItems.length}</span>
          <span className="stat-label">Total Items</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">
            {pantryItems.filter(item => isExpiringSoon(item.expiration)).length}
          </span>
          <span className="stat-label">Expiring Soon</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">
            {pantryItems.filter(item => item.quantity <= 1).length}
          </span>
          <span className="stat-label">Low Stock</span>
        </div>
      </div>

      <div className="pantry-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`pantry-item ${isExpired(item.expiration) ? 'expired' : ''} ${
                isExpiringSoon(item.expiration) ? 'expiring-soon' : ''
              }`}
            >
              <div className="item-details">
                <h3>{item.name}</h3>
                <div className="item-meta">
                  <span className="item-quantity">{item.quantity} {item.unit}</span>
                  <span className="item-category">{item.category}</span>
                </div>
                {item.expiration && (
                  <div className="item-expiration">
                    {isExpired(item.expiration) ? (
                      <span className="expired-tag">Expired</span>
                    ) : isExpiringSoon(item.expiration) ? (
                      <span className="expiring-soon-tag">Expiring Soon</span>
                    ) : (
                      <span>Expires: {new Date(item.expiration).toLocaleDateString()}</span>
                    )}
                  </div>
                )}
              </div>
              <div className="item-actions">
                <button 
                  className="delete-btn"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-items-message">
            <p>No ingredients match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPantry;