import { useEffect, useState } from 'react';
import { recipesData } from './datasources/recipes';

export function useRecipes(): Recipe[] {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipesData.on('value', snapshot => {
      setRecipes(snapshot ? snapshot.val() : []);
    });

    return () => recipesData.off('value');
  });

  return recipes;
}
