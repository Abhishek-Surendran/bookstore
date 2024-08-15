import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookForm = ({ initialData, isEditMode }) => {
  const [book, setBook] = useState(initialData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const request = isEditMode
      ? axios.put(`https://bookstore-7za0.onrender.com/books/${book._id}`, book)
      : axios.post('https://bookstore-7za0.onrender.com/books', book);

    request.then(() => {
      navigate('/');
    }).catch(error => {
      console.error('There was an error saving the book!', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={book.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          name="author"
          className="form-control"
          value={book.author}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Publish Year</label>
        <input
          type="number"
          name="publishYear"
          className="form-control"
          value={book.publishYear}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-success mt-3">
        {isEditMode ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
};

export default BookForm;
