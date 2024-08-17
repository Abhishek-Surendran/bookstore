import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://bookstore-7za0.onrender.com/books/${id}`)
      .then(response => {
        setBook(response.data);
        setLoading(false);  // Stop loading when data is fetched
      })
      .catch(error => {
        console.error('There was an error fetching the book!', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <LoadingSpinner loading={loading} />;
  }

  return book ? (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Publish Year:</strong> {book.publishYear}</p>
    </div>
  ) : <p>Book not found</p>;
};

export default BookDetails;
