import React from 'react';
import { RecipesList } from './RecipesList';
import { EditButton } from './EditButton';
import './styles.css';

export class HomePage extends React.Component {
  handleClick(recipeTitle, recipeImage, recipeUrl) {
    window.open(recipeUrl);
  }

  render() {
    return (
      <div>
        <EditButton />
        <div className="recipeGrid">
          <RecipesList onRecipeClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
