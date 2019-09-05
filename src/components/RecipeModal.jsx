import React from 'react';
import Modal from 'react-responsive-modal';
import './styles.css';

export function RecipeModal(props) {
  const {
    onFormChange,
    title,
    image,
    url,
    onSubmit,
    isOpen,
    onCloseModal,
    recipeKey,
    onDelete,
  } = props;

  return (
    <Modal open={isOpen} onClose={onCloseModal}>
      <form
        onSubmit={event => {
          event.preventDefault();
          onSubmit({ title, image, url, recipeKey });
          onCloseModal();
        }}
      >
        <label htmlFor="title">
          Title
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={event => onFormChange('title', event.target.value)}
            />
          </div>
        </label>
        <label htmlFor="image">
          Image
          <div>
            <input
              type="text"
              name="image"
              value={image}
              onChange={event => onFormChange('image', event.target.value)}
            />
          </div>
        </label>
        <label htmlFor="url">
          URL
          <div>
            <input
              type="text"
              name="url"
              value={url}
              onChange={event => onFormChange('url', event.target.value)}
            />
          </div>
        </label>
        <input type="submit" />
        <button onClick={() => onDelete(recipeKey)} className="deleteButton">
          Delete
        </button>
      </form>
    </Modal>
  );
}
