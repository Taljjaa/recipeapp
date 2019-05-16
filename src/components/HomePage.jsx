import React from 'react';
import { RecipeStorage } from './RecipeStorage';
import './styles.css';

export class HomePage extends React.Component {
   handleClick = id => {
      alert('Clicked Home!');
   };
   render() {
      return (
         <div className="recipeGrid">
            <RecipeStorage onClick={this.handleClick} />
         </div>
      );
   }
}
