import React from 'react';
import firebase from '../firebase.js';

export class RecipeDisplay extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         name: '',
         image: '',
         link: '',
      };
   }
}
