import React from 'react';
import './styles.css';
import { RecipeStorage } from './RecipeStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class EditPage extends React.Component {
   render() {
      return (
         <div className="recipeGrid">
            <div className="newRecipe recipeImg">
               Add Recipe
               <FontAwesomeIcon
                  style={{ color: '#4f4f4f' }}
                  size="5x"
                  icon={['fas', 'plus']}
               />
            </div>

            <RecipeStorage />
         </div>
      );
   }
}
