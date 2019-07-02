import React from 'react';
import './styles.css';

export class RecipeDisplay extends React.Component {
   render() {
      const { url, image, title } = this.props;
      return (
         <div key={url}>
            <img className="recipeImg" src={image} alt={title} />
            <div>{title}</div>
         </div>
      );
   }
}
