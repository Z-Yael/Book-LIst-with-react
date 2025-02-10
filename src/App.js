import React, { useState } from "react";
import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";
const App = () => {
  const [books, setBooks] = useState([
    // { id: 43554, title: "book 1" },
    // { id: 435354, title: "book 2" },
  ]);

  //Functions
  //Handle Ceate books
  const handleCreateBooks = (title) => {
    const createdBooks = [
      ...books,
      { id: Math.round(Math.random() * 93971), title },
    ];
    setBooks(createdBooks);
    console.log(books);
  };

  const handleEditBook = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const handleDeleteBooks = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDelete={handleDeleteBooks}
        onEdit={handleEditBook}
      />
      <CreateBook onCreate={handleCreateBooks} />
      {/* <Testing /> */}
    </div>
  );
};

export default App;
//https://picsum.photos
