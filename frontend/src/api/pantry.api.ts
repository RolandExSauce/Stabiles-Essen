import { PANTRY_ENDPOINTS } from "./constants";
import { axiosInstance } from "../lib/axios";


// Type for pantry item (optional, adapt as needed)
export interface PantryItem {
    name: string;
    quantity: number;
    unit: string;
    [key: string]: any; // for flexibility
}

// 🧂 Add a pantry item
export const addPantryItem = async (item: PantryItem) => {
    const res = await axiosInstance.post(PANTRY_ENDPOINTS.ADD, item);
    return res.data;
};

// 🧹 Delete a pantry item by ID
export const deletePantryItem = async (id: string) => {
    const res = await axiosInstance.delete(PANTRY_ENDPOINTS.DELETE(id));
    return res.data;
};

// 📦 Get all pantry items (when endpoint is available)
export const fetchAllPantryItems = async () => {
    const res = await axiosInstance.get(PANTRY_ENDPOINTS.GET_ALL);
    return res.data;
};
