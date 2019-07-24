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

  render() {
    const { title, image, url, isOpen } = this.state;
    const handleClick = () => this.setState({ isOpen: true });
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
        />
        <div className="recipeGrid">
          <div className="newRecipe recipeImg" onClick={handleClick}>
            <span className="txt">Add Recipe</span>
            <FontAwesomeIcon className="plusIcon" icon={['fas', 'plus']} />
          </div>
          <RecipesList onClick={handleClick} />
        </div>
      </>
    );
  }
}
