//get firebase data here and then pass down tree to home and edit pages

import React from 'react';
import { RecipeDisplay } from './RecipeDisplay';
import { useRecipes } from '../magic';

export function RecipesList({ onClick }) {
  const recipes = useRecipes();

  return Object.values(recipes).map(recipe => {
    return (
      <div key={recipe.url} onClick={() => onClick(recipe)}>
        <RecipeDisplay
          image={recipe.image}
          url={recipe.url}
          title={recipe.title}
        />
      </div>
    );
  });
}
