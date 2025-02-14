import axios from "axios";
import React, { useEffect, useState } from "react";
import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";
const App = () => {
  const [books, setBooks] = useState([
    // { id: 43554, title: "book 1" },
    // { id: 435354, title: "book 2" },
  ]);

  //Functions

  //Fetching Data from server
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    // console.log(response.data);
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  //Handle Ceate books
  const handleCreateBooks = async (title) => {
    // // console.log(books);
    const response = await axios.post(`http://localhost:3001/books`, { title });
    // console.log(response.data);
    const createdBooks = [...books, response.data];
    setBooks(createdBooks);
  };

  const handleEditBook = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    // console.log(response.data);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const handleDeleteBooks = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
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
