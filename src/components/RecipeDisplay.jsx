import React from 'react';
import firebase from '../firebase.js';
import './styles.css';

export class RecipeDisplay extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         title: '',
         image: '',
         link: '',
         recipes: [],
      };
   }
   componentDidMount() {
      const recipesRef = firebase.database().ref('recipes');
      recipesRef.on('value', snapshot => {
         let recipes = snapshot.val();
         let newState = [];
         for (let recipe in recipes) {
            newState.push({
               id: recipe,
               title: recipes[recipe].title,
               image: recipes[recipe].image,
               link: recipes[recipe].link,
            });
         }
         this.setState({
            recipes: newState,
         });
      });
   }

   removeItem(recipeId) {
      const recipeRef = firebase.database().ref(`/recipes/${recipeId}`);
      recipeRef.remove();
   }

   render() {
      return (
         <div>
            <div className="recipeGrid">
               {this.state.recipes.map(recipe => {
                  return (
                     <div key={recipe.id}>
                        <a href={recipe.link}>
                           <img
                              className="recipeImg"
                              src={recipe.image}
                              alt={recipe.title}
                           />
                           <div>{recipe.title}</div>
                        </a>
                        <button onClick={() => this.removeItem(recipe.id)}>
                           Delete
                        </button>
                     </div>
                  );
               })}
            </div>
         </div>
      );
   }
}
