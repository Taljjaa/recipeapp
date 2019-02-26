import React from 'react';
import { RecipeStorage } from './RecipeStorage';
import './styles.css';

export class HomePage extends React.Component {
   render() {
      return (
         <div className="recipeGrid">
            <RecipeStorage />
         </div>
      );
   }
}
