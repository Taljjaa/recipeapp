import React from 'react';
import { RecipesList } from './RecipesList.jsx';
import { EditButton } from './EditButton.jsx';
import './styles.css';

export class HomePage extends React.Component {
   render() {
      return (
         <div>
            <EditButton />
            <div className="recipeGrid">
               <RecipesList onClick={recipe => window.open(recipe.link)} />
            </div>
         </div>
      );
   }
}
