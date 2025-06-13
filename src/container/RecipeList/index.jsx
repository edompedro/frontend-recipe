import React from 'react';
import { List, Empty, Button } from 'antd';
import RecipeCard from '../../components/Card/index';

const RecipeList = ({ recipes, onFavorite, filter }) => {

    const searchTerm = filter.search.split(',').map(term => term.trim()).filter(term => term.length > 0);

    // Filter recipes alphabetically, favorites, or by number of ingredients
    const sortRecipes = recipes.filter(recipe => {
        if (filter.sortBy === 'alphabetical') {
            return recipes.sort((a, b) => a.name.localeCompare(b.name)); 
        } else if (filter.sortBy === 'favorites') {
            return recipe.favorite; 
        } else if (filter.sortBy === 'numIngredients') {
            return recipes.sort((a, b) => a.ingredients.length - b.ingredients.length);
        }
        return true; 
    });

    // Filter recipes by search term
    const filteredRecipes = sortRecipes.filter(recipe => {
        if (filter.search !== "") {
            // Check for every search term in the recipe's ingredients
            return searchTerm.every(term =>
                recipe.ingredients.some(ingredient =>
                    ingredient.toLowerCase().includes(term.toLowerCase())
                )
            );
        }
        return true; // If no search term, return the recipes sorted by the selected filter
    });
    console.log(`Filtered recipes by ${filter}:`, filteredRecipes);

    return (
        <div className="recipe-list" style={{ padding: 12 }}>
            {filteredRecipes && filteredRecipes.length > 0 ? (
                <List
                    grid={{ gutter: 24, xs: 1, sm: 2, md: 3, lg: 4 }}
                    dataSource={filteredRecipes}
                    renderItem={(recipe) => (
                        <List.Item key={recipe.id} style={{ display: 'flex', justifyContent: 'center' }}>
                            <RecipeCard recipe={recipe} onMakeFavorite={() => onFavorite(recipe)} />
                        </List.Item>
                    )}
                />
            ) : (
                <Empty description="No recipes found." />
            )}
        </div>
    );
};

export default RecipeList;