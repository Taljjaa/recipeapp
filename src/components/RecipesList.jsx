//get firebase data here and then pass down tree to home and edit pages

import React from 'react';
import firebase from '../firebase.js';
import { RecipeDisplay } from './RecipeDisplay.jsx';

export class RecipesList extends React.Component {
   state = {
      recipes: [],
   };
   componentDidMount() {
      const recipesRef = firebase.database().ref('recipes');
      recipesRef.on('value', snapshot => {
         let recipes = snapshot.val();
         this.setState({
            recipes,
         });
      });
   }

   render() {
      const recipes = Object.values(this.state.recipes).map(recipe => {
         return (
            <div key={recipe.link} onClick={() => this.props.onClick(recipe)}>
               <RecipeDisplay
                  image={recipe.image}
                  url={recipe.link}
                  title={recipe.title}
               />
            </div>
         );
      });
      return recipes;
   }
}
