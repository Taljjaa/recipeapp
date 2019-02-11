import React from 'react';
import firebase from '../firebase.js';

export class RecipeForm extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         title: '',
         image: '',
         link: '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleChange(event) {
      this.setState({
         [event.target.name]: event.target.value,
      });
   }

   handleSubmit(event) {
      event.preventDefault();
      const recipesRef = firebase.database().ref('recipes');
      const recipe = {
         title: this.state.title,
         image: this.state.image,
         link: this.state.link,
      };
      recipesRef.push(recipe);
      this.setState({
         title: '',
         image: '',
         link: '',
      });
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <label>
               Title
               <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
               />
            </label>
            <label>
               Image
               <input
                  type="text"
                  name="image"
                  value={this.state.image}
                  onChange={this.handleChange}
               />
            </label>
            <label>
               Link
               <input
                  type="text"
                  name="link"
                  value={this.state.link}
                  onChange={this.handleChange}
               />
            </label>
            <input type="submit" value="Submit" />
         </form>
      );
   }
}
