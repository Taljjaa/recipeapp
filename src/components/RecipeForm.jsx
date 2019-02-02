import React from 'react';

export class RecipeForm extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <form>
            <label>
               Recipe Name
               <input type="name" name="name" />
               <input type="submit" value="Submit" />
            </label>
         </form>
      );
   }
}
