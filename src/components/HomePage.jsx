import React from 'react';
import { RecipeDisplay } from './RecipeDisplay.jsx';
import './styles.css';

export class HomePage extends React.Component {
   handleClick = id => {
      console.log('test');
   };
   render() {
      return (
         <div className="recipeGrid">
            <RecipeDisplay
               image={this.props.image}
               link={this.props.link}
               title={this.props.title}
               onClick={this.handleClick}
            />
         </div>
      );
   }
}
