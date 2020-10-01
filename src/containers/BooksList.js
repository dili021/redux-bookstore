import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table className="books">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => <Book key={book.id} book={book} />)}
    </tbody>
  </table>
);

const mapStateToProps = ({ books }) => ({ books });

BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(BooksList);
