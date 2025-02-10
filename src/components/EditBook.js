import React, { useState } from "react";

const EditBook = ({ onSubmit, book }) => {
  const [title, setTitle] = useState(book.title);
  console.log(title);
  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleEditSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleOnChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default EditBook;
