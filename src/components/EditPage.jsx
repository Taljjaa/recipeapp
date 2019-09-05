import React from 'react';
import './styles.css';
import { RecipesList } from './RecipesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RecipeModal } from './RecipeModal';
import { addRecipe, editRecipe } from './../magic/index.ts';

export class EditPage extends React.Component {
  state = {
    title: '',
    image: '',
    url: '',
    recipeKey: '',
    isOpen: false,
  };

  handleFormChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false });
  };

  handleSubmit = param => {
    const { title, image, url, recipeKey } = param;
    if (recipeKey) {
      editRecipe(recipeKey, { title, image, url });
    } else {
      addRecipe({ title, image, url });
    }
  };

  // handleDelete = recipeKey => {
  //   deleteRecipe(recipeKey);
  // };

  render() {
    const { title, image, url, isOpen, recipeKey } = this.state;
    const handleClick = (title, image, url, recipeKey) =>
      this.setState({
        isOpen: true,
        title: title,
        image: image,
        url: url,
        recipeKey: recipeKey,
      });
    return (
      <>
        <RecipeModal
          isOpen={isOpen}
          onSubmit={this.handleSubmit}
          onDelete={this.handleDelete}
          onFormChange={this.handleFormChange}
          title={title}
          image={image}
          url={url}
          recipeKey={recipeKey}
          onCloseModal={this.handleCloseModal}
        />
        <div className="recipeGrid">
          <div
            className="newRecipe recipeImg"
            onClick={() => handleClick('', '', '')}
          >
            <span className="txt">Add Recipe</span>
            <FontAwesomeIcon className="plusIcon" icon={['fas', 'plus']} />
          </div>
          <RecipesList onRecipeClick={handleClick} />
        </div>
      </>
    );
  }
}
