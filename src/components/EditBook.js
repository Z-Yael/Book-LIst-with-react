import React, { useEffect, useState } from "react";

const EditBook = ({ onSubmit, book }) => {
  const [title, setTitle] = useState(book.title);
  const [disabled, setDisabled] = useState(true);
  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    setDisabled(title ? false : true);
  });
  const handleEditSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleEditSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleOnChange} />
      <button className="button is-primary" disabled={disabled}>
        Save
      </button>
    </form>
  );
};

export default EditBook;
