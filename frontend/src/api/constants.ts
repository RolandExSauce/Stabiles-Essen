// Base URLs (you can adjust this if needed for dev/prod environments)
export const BASE_API_URL = "http://localhost:8080/silverback"; 

// Auth Endpoints
export const AUTH_ENDPOINTS = {
  SIGN_IN: `${BASE_API_URL}/auth/signin`,
  SIGN_UP: `${BASE_API_URL}/auth/signup`,
};


// Recipe Endpoints
export const RECIPE_ENDPOINTS = {
  ADD: `${BASE_API_URL}/recipes/add`,
  DELETE: (id: string) => `${BASE_API_URL}/recipes/delete/${id}`,
  UPDATE: (id: string) => `${BASE_API_URL}/recipes/update/${id}`,
  // Placeholder for future:
  GET_USER_RECIPES: `${BASE_API_URL}/silverback/recipes/user`,
  EXTERNAL_API: "/silverback/recipes/external"
};

// Pantry Endpoints
export const PANTRY_ENDPOINTS = {
  ADD: `${BASE_API_URL}/pantry/add`,
  DELETE: (id: string) => `${BASE_API_URL}/pantry/delete/${id}`,

  GET_USER_PANTRY_ITEMS: `${BASE_API_URL}/items/user`,
  GET_ALL: `${BASE_API_URL}/api/pantry/all`
};

// Test/Public
export const TEST_ENDPOINT = `${BASE_API_URL}/silverbackkitchen/test/all`;
