import React from 'react';
import Modal from 'react-responsive-modal';

export function RecipeModal(props) {
   const {
      onTitleChange,
      onImageChange,
      onUrlChange,
      title,
      image,
      url,
      onSubmit,
      isOpen,
   } = props;

   return (
      <Modal open={isOpen}>
         <form
            onSubmit={event => {
               event.preventDefault();
               onSubmit({ title, image, url });
            }}
         >
            <label for="title">
               Title
               <div>
                  <input
                     type="text"
                     name="title"
                     value={title}
                     onChange={onTitleChange}
                  />
               </div>
            </label>
            <label for="image">
               Image
               <div>
                  <input
                     type="text"
                     name="image"
                     value={image}
                     onChange={onImageChange}
                  />
               </div>
            </label>
            <label for="url">
               URL
               <div>
                  <input
                     type="text"
                     name="url"
                     value={url}
                     onChange={onUrlChange}
                  />
               </div>
            </label>
            <input type="submit" />
         </form>
      </Modal>
   );
}
