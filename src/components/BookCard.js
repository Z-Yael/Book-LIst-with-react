import React, { useState } from "react";
import EditBook from "./EditBook";

const BookCard = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleClickDelete = () => {
    onDelete(book.id);
  };
  const handleClickEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <EditBook onSubmit={handleSubmit} book={book} />;
  }
  return (
    <div
      className="book-show"
      onDoubleClick={handleClickEdit}
      style={{ cursor: "pointer" }}
    >
      <img
        alt="The cover image of book."
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleClickEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleClickDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
