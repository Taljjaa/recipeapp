import { useEffect, useState } from 'react';
import { recipesData } from './datasources/recipes';
import { Recipe } from '../react-app-env';

export function useRecipes(): Record<string, Recipe> {
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    recipesData.on('value', snapshot => {
      setRecipes(snapshot ? snapshot.val() : []);
    });

    return () => recipesData.off('value');
  });

  return recipes;
}
