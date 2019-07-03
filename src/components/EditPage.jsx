import React from 'react';
import './styles.css';
import { RecipesList } from './RecipesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RecipeModal } from './RecipeModal';

export class EditPage extends React.Component {
   state = {
      title: '',
      image: '',
      url: '',
   };

   handleTitleChange = event => {
      this.setState({
         title: event.target.value,
      });
   };

   handleImageChange = event => {
      this.setState({
         image: event.target.value,
      });
   };

   handleUrlChange = event => {
      this.setState({
         url: event.target.value,
      });
   };

   render() {
      return (
         <div>
            <RecipeModal
               isOpen={true}
               onSubmit={param => {
                  console.log(param);
               }}
               onTitleChange={this.handleTitleChange}
               onImageChange={this.handleImageChange}
               onUrlChange={this.handleUrlChange}
               title={this.state.title}
               image={this.state.image}
               url={this.state.url}
            />
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
