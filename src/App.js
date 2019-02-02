import React, { Component } from 'react';
import { RecipeForm } from './components/RecipeForm';
import './App.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <h1>Recipe Box</h1>
            <RecipeForm />
         </div>
      );
   }
}

export default App;
