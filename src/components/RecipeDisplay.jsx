import React from 'react';
import './styles.css';

export class RecipeDisplay extends React.Component {
   // removeItem(recipeId) {
   //    const recipeRef = firebase.database().ref(`/recipes/${recipeId}`);
   //    recipeRef.remove();
   // }

   render() {
      return (
         <div key="1" onClick={this.props.link}>
            <img
               className="recipeImg"
               src={this.props.image}
               alt={this.props.title}
            />
            <div>{this.props.title}</div>
         </div>
      );
   }
}
