import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import BookDetails from './components/BookDetails';

const App = () => {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/details/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
