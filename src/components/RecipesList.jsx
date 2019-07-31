//get firebase data here and then pass down tree to home and edit pages

import React from 'react';
import { RecipeDisplay } from './RecipeDisplay';
import { useRecipes } from '../magic';

export function RecipesList({ onRecipeClick }) {
  const recipes = useRecipes();

  return Object.keys(recipes).map(recipeKey => {
    const recipe = recipes[recipeKey];
    return (
      <div
        key={recipe.url}
        onClick={() =>
          onRecipeClick(recipe.title, recipe.image, recipe.url, recipeKey)
        }
      >
        <RecipeDisplay
          image={recipe.image}
          url={recipe.url}
          title={recipe.title}
        />
      </div>
    );
  });
}
