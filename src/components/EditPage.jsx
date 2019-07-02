import React from 'react';
import './styles.css';
import { RecipesList } from './RecipesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class EditPage extends React.Component {
   render() {
      return (
         <div>
            <div className="recipeGrid">
               <div className="newRecipe recipeImg">
                  <span className="txt">Add Recipe</span>
                  <FontAwesomeIcon
                     className="plusIcon"
                     icon={['fas', 'plus']}
                  />
               </div>
               <RecipesList onClick={recipe => console.log(recipe)} />
            </div>
         </div>
      );
   }
}
