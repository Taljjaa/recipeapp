import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { RecipeDisplay } from './components/RecipeDisplay';
import './components/styles.css';
import { EditButton } from './components/EditButton';

class App extends Component {
   render() {
      return (
         <div className="App">
            <h1>Recipe Box</h1>
            <EditButton />
            <RecipeDisplay />
         </div>
      );
   }
}

export default App;
