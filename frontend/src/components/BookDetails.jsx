import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`https://bookstore-7za0.onrender.com/books/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the book!', error);
      });
  }, [id]);

  return book ? (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Publish Year:</strong> {book.publishYear}</p>
    </div>
  ) : <p>Loading...</p>;
};

export default BookDetails;
