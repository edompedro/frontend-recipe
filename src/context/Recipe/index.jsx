import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../api";

// Create the context
const RecipeContext = createContext();

// Custom hook to use the context
// eslint-disable-next-line react-refresh/only-export-components
export const useRecipe = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipe must be used within a RecipeProvider");
  }
  return context;
};

// Provider component
export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Fetch recipes from the database (replace URL with your API endpoint)
  const fetchRecipes = async () => {
    try {
      const response = await api.get("/");
      setRecipes(response.data);
    } catch (error) {
      throw new Error("Failed to fetch recipes: " + error.message);
    }
  };

  // Handle favorite toggle
  const toggleFavorite = async (recipeId, isFavorite) => {
    try {
      const response = await api.put(`/${recipeId}`, { favorite: isFavorite });

      const updatedRecipe = recipes.find((recipe) => recipe.id === recipeId);
      if (updatedRecipe) {
        updatedRecipe.favorite = isFavorite;
        setRecipes((prevRecipes) =>
          prevRecipes.map((recipe) =>
            recipe.id === recipeId ? updatedRecipe : recipe
          )
        );
      }
      setFavorites((prevFavorites) => {
        if (isFavorite) {
          return [...prevFavorites, updatedRecipe];
        } else {
          return prevFavorites.filter((recipe) => recipe.id !== recipeId);
        }
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to update favorite status: " + error.message);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, favorites, toggleFavorite }}>
      {children}
    </RecipeContext.Provider>
  );
};
