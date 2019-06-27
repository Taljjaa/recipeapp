import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './components/styles.css';
import { EditButton } from './components/EditButton';
import { EditPage } from './components/EditPage';
import { Link } from 'react-router-dom';
import { RecipesList } from './components/RecipesList';

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
               <Route exact path="/" component={RecipesList} />
            </>
         </Router>
      );
   }
}

export default App;
