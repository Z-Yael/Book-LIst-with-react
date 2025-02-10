import React, { useState } from "react";

const Testing = () => {
  console.log("Testing");
  const [colors, setColors] = useState(["red", "blue", "green"]);

  //  1. Adding to state Array
  // const AddColors = (newColor) => {
  //   const updatedColors = [...colors, newColor];
  //   setColors(updatedColors);
  //   console.log(colors);
  // };

  // const [books, setBooks] = useState([
  //   { id: 1, title: "Sense and Sensibility" },
  //   { id: 2, title: "Oliver Twist" },
  // ]);
  // console.log(books);
  // const changeTitle = (newTitle, id) => {
  //   const updatedBooks = books.map((book) => {
  //     console.log(book.title);
  //     if (book.id === id) {
  //       book.title = newTitle;
  //     }
  //     return book;
  //   });
  //   setBooks(updatedBooks);
  // };

  // const user = {
  //   name: "John Doe",
  //   age: 25,
  //   hobbies: ["reading", "gaming", "cycling"],
  //   address: {
  //     street: "123 Main St",
  //     city: "New York",
  //     country: "USA",
  //   },
  //   greet: function () {
  //     console.log(`Hello, my name is ${this.name}`);
  //   },
  // };

  // const removePropertyinObj = () => {
  //   const { name, greet, ...rest } = user;

  //   console.log(rest);
  // };
  return (
    <div>
      {/* <button
        onClick={() => {
          changeTitle("I love you so much and you would never know.", 1);
        }}
        onDoubleClick={() => {
          changeTitle("Will we meet again?", 2);
        }}
      >
        Click Me
      </button> */}

      <button onClick={removePropertyinObj}>Click</button>
    </div>
  );
};

export default Testing;
