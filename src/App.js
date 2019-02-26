import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { RecipeDisplay } from './components/RecipeDisplay';
import './components/styles.css';
import { EditButton } from './components/EditButton';
import { EditPage } from './components/EditPage';
import { HomePage } from './components/HomePage';

class App extends Component {
   render() {
      return (
         <Router>
            <>
               <div className="App">
                  <h1>Recipe Box</h1>
                  <EditButton />
               </div>
               <Route path="/edit" component={EditPage} />
               <Route exact path="/" component={HomePage} />
            </>
         </Router>
      );
   }
}

export default App;
