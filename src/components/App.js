import React from 'react';
import '../App.scss';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
