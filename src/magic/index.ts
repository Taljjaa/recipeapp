import { useRecipes } from './useRecipes';
import { recipesData } from './datasources/recipes';
import { Recipe } from '../react-app-env';

function addRecipe(recipe: Recipe) {
  recipesData.push(recipe);
}

function editRecipe(key: string, recipe: Recipe) {
  recipesData.child(key).set(recipe);
}

export { useRecipes, addRecipe, editRecipe };
