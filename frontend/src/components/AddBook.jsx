import React from 'react';
import BookForm from './BookForm';

const AddBook = () => {
  const initialData = { title: '', author: '', publishYear: '' };
  return <BookForm initialData={initialData} isEditMode={false} />;
};

export default AddBook;
