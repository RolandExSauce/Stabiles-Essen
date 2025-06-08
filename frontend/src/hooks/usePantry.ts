import { useMutation, useQuery } from "@tanstack/react-query";
import * as pantryApi from "../api/pantry.api";

export const useAddPantryItem = () =>
    useMutation({
        mutationFn: pantryApi.addPantryItem,
    });

export const useDeletePantryItem = () =>
    useMutation({
        mutationFn: pantryApi.deletePantryItem,
    });

export const useAllPantryItems = () =>
    useQuery({
        queryKey: ["pantry-items"],
        queryFn: pantryApi.fetchAllPantryItems,
    });
