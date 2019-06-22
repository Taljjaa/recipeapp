import React from 'react';
import { RecipeDisplay } from './RecipeDisplay.jsx';
import './styles.css';

export class HomePage extends React.Component {
   render() {
      return (
         <div className="recipeGrid">
            <a href={this.props.link}>
               <RecipeDisplay
                  image={this.props.image}
                  link={this.props.link}
                  title={this.props.title}
               />
            </a>
         </div>
      );
   }
}
