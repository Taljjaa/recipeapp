import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './components/styles.css';
import { EditButton } from './components/EditButton';
import { EditPage } from './components/EditPage';
import { HomePage } from './components/HomePage';
import { Link } from 'react-router-dom';
import { RecipeContainer } from './components/RecipeContainer';

class App extends Component {
   render() {
      return (
         <Router>
            <>
               <div className="App">
                  <h1>
                     <Link to="/">Recipe Box</Link>
                  </h1>
                  <EditButton />
               </div>
               <Route path="/edit" component={EditPage} />
               <Route exact path="/" component={RecipeContainer} />
            </>
         </Router>
      );
   }
}

export default App;
