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

  handleFormChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };

  render() {
    return (
      <>
        <RecipeModal
          isOpen={true}
          onSubmit={param => {
            console.log(param);
          }}
          onFormChange={this.handleFormChange}
          title={this.state.title}
          image={this.state.image}
          url={this.state.url}
        />
        <div className="recipeGrid">
          <div className="newRecipe recipeImg">
            <span className="txt">Add Recipe</span>
            <FontAwesomeIcon className="plusIcon" icon={['fas', 'plus']} />
          </div>
          <RecipesList onClick={recipe => console.log(recipe)} />
        </div>
      </>
    );
  }
}
