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
    isOpen: false,
  };

  handleFormChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
  };

  onCloseModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { title, image, url, isOpen } = this.state;
    const handleClick = (title, image, url) =>
      this.setState({ isOpen: true, title: title, image: image, url: url });
    return (
      <>
        <RecipeModal
          isOpen={isOpen}
          onSubmit={param => {
            console.log(param);
          }}
          onFormChange={this.handleFormChange}
          title={title}
          image={image}
          url={url}
          onCloseModal={this.onCloseModal}
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
