import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://bookstore-7za0.onrender.com/books')
      .then(response => {
        setBooks(response.data);
        setLoading(false);  // Stop loading when data is fetched
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
        setLoading(false);
      });
  }, []);

  const deleteBook = (id) => {
    setLoading(true);  // Start loading when deleting a book
    axios.delete(`https://bookstore-7za0.onrender.com/books/${id}`)
      .then(response => {
        setBooks(books.filter(book => book._id !== id));
        setLoading(false);  // Stop loading after deletion
      })
      .catch(error => {
        console.error('There was an error deleting the book!', error);
        setLoading(false);
      });
  };

  if (loading) {
    return <LoadingSpinner loading={loading} />;
  }

  return (
    <div>
      <h2>Book List</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add New Book</Link>
      <ul className="list-group">
        {books.map(book => (
          <li key={book._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{book.title}</h5>
              <p>{book.author}</p>
            </div>
            <div>
              <Link to={`/details/${book._id}`} className="btn btn-info mr-2">View</Link>
              <Link to={`/edit/${book._id}`} className="btn btn-warning mr-2">Edit</Link>
              <button onClick={() => deleteBook(book._id)} className="btn btn-danger">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
