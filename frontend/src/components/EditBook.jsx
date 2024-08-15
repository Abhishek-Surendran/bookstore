import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookForm from './BookForm';

const EditBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5656/books/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the book!', error);
      });
  }, [id]);

  return book ? <BookForm initialData={book} isEditMode={true} /> : <p>Loading...</p>;
};

export default EditBook;
