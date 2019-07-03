import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './components/styles.css';

import { EditPage } from './components/EditPage';
import { Link } from 'react-router-dom';
import { HomePage } from './components/HomePage';

class App extends Component {
   render() {
      return (
         <Router>
            <>
               <div className="App">
                  <h1>
                     <Link to="/">Recipe Box</Link>
                  </h1>
               </div>
               <Route path="/edit" component={EditPage} />
               <Route exact path="/" component={HomePage} />
            </>
         </Router>
      );
   }
}

export default App;
