import React, { useEffect, useState } from "react";

const CreateBook = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [disabled, setDisabled] = useState(true);
  const handleOnChange = (e) => {
    setTitle(e.target.value);
    // console.log(title);
  };
  useEffect(() => {
    setDisabled(title ? false : true);
  }, [title]);
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          value={title}
          onChange={handleOnChange}
          placeholder="Enter the title of book..."
        />
        <button className="button" onClick={handleSubmit} disabled={disabled}>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
