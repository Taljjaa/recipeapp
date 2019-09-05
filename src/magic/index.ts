import { useRecipes } from './useRecipes';
import { recipesData } from './datasources/recipes';
import { Recipe } from '../react-app-env';

function addRecipe(recipe: Recipe) {
  recipesData.push(recipe);
}

function editRecipe(key: string, recipe: Recipe) {
  recipesData.child(key).set(recipe);
}

// function deleteRecipe(key: string) {
//   recipesData[key].remove();
// }

export { useRecipes, addRecipe, editRecipe };
