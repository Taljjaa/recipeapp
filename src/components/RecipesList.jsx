//get firebase data here and then pass down tree to home and edit pages

import React from 'react';
import firebase from '../firebase.js';
import { HomePage } from './HomePage';

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
      console.log(this.state.recipes);
      const recipes = Object.values(this.state.recipes).map(recipe => {
         console.log(recipe);
         return (
            <div>
               <HomePage
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
