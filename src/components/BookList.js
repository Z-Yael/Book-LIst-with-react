import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, onDelete, onEdit }) => {
  const renderBooks = books.map((book) => {
    return (
      <BookCard onDelete={onDelete} key={book.id} book={book} onEdit={onEdit} />
    );
  });
  return <div className="book-list">{renderBooks}</div>;
};

export default BookList;
