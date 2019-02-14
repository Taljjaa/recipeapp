import React, { Component } from 'react';
import { RecipeForm } from './components/RecipeForm';
import { RecipeDisplay } from './components/RecipeDisplay';
import './components/styles.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <h1>Recipe Box</h1>
            <RecipeForm />
            <RecipeDisplay />
         </div>
      );
   }
}

export default App;
