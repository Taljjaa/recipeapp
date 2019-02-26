import React from 'react';
import './styles.css';
import { RecipeStorage } from './RecipeStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class EditPage extends React.Component {
   render() {
      return (
         <div className="recipeGrid">
            <div className="newRecipe recipeImg">
               <span className="txt">Add Recipe</span>
               <FontAwesomeIcon className="plusIcon" icon={['fas', 'plus']} />
            </div>
            <RecipeStorage />
         </div>
      );
   }
}
