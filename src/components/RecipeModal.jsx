import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import firebase from '../firebase.js';

export class RecipeModal extends React.Component {
   state = {
      open: false,
      title: '',
      image: '',
      link: '',
   };

   onOpenModal = () => {
      this.setState({ open: true });
   };

   onCloseModal = () => {
      this.setState({ open: false, title: '', image: '', link: '' });
   };

   handleChange = event => {
      this.setState({
         [event.target.name]: event.target.value,
      });
   };

   handleSubmit = event => {
      event.preventDefault();
      const recipesRef = firebase.database().ref('recipes');
      const recipe = {
         title: this.state.title,
         image: this.state.image,
         link: this.state.link,
      };
      recipesRef.push(recipe);
      this.onCloseModal();
   };

   handleDelete = recipeId => {
      const recipeRef = firebase.database().ref(`/recipes/${recipeId}`);
      recipeRef.remove();
   };

   render() {
      const { open } = this.state;
      return (
         <div>
            <div onClick={this.onOpenModal}>{this.props.children}</div>
            <Modal open={open} onClose={this.onCloseModal} center>
               <form onSubmit={this.handleSubmit} action="">
                  <p>
                     <label htmlFor="title">
                        Title
                        <input
                           value={this.state.title}
                           name="title"
                           type="text"
                           onChange={this.handleChange}
                        />
                     </label>
                  </p>
                  <p>
                     <label htmlFor="image">
                        Image
                        <input
                           value={this.state.image}
                           name="image"
                           type="text"
                           onChange={this.handleChange}
                        />
                     </label>
                  </p>
                  <p>
                     <label htmlFor="link">
                        URL
                        <input
                           value={this.state.url}
                           name="link"
                           type="text"
                           onChange={this.handleChange}
                        />
                     </label>
                  </p>
                  <input type="submit" value="Submit" />
                  <button onClick={this.handleDelete}>Delete</button>
               </form>
            </Modal>
         </div>
      );
   }
}
