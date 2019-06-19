import React from 'react';
import './styles.css';
import { RecipeContainer } from './RecipeContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RecipeModal } from './RecipeModal';

export class EditPage extends React.Component {
   render() {
      return (
         <div>
            <RecipeModal />
            <div className="recipeGrid">
               <div className="newRecipe recipeImg">
                  <span className="txt">Add Recipe</span>
                  <FontAwesomeIcon
                     className="plusIcon"
                     icon={['fas', 'plus']}
                  />
               </div>
               <RecipeContainer />
            </div>
         </div>
      );
   }
}
