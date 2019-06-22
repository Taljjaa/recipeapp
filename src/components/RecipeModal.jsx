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

   render() {
      const { open } = this.state;
      return (
         <div>
            <button onClick={this.onOpenModal}>Open modal</button>
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
                        Link
                        <input
                           value={this.state.link}
                           name="link"
                           type="text"
                           onChange={this.handleChange}
                        />
                     </label>
                  </p>
                  <input type="submit" value="Submit" />
               </form>
            </Modal>
         </div>
      );
   }
}
