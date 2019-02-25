import React from 'react';
import { Link } from 'react-router-dom';

export class EditButton extends React.Component {
   render() {
      return (
         <div>
            <Link to="/edit">Edit</Link>
         </div>
      );
   }
}
