import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.removeBookFromState = this.removeBookFromState.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
  }

  filterBooks({ target: { value: filter } }) {
    const { changeFilter } = this.props;
    changeFilter(filter);
  }

  removeBookFromState(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }

  render() {
    const { books, filter } = this.props;
    const filteredBooks = filter === 'All' ? books : books.filter(({ category }) => category === filter);

    return (
      <div className="wrapper">
        <CategoryFilter handleChange={this.filterBooks} />
        <table className="books">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Remove Book</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map(book => (
              <Book
                key={book.id}
                book={book}
                removeBookFromState={this.removeBookFromState}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ books, filter }) => ({ books, filter });

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: book => dispatch(changeFilter(book))
  ,
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,

};

BooksList.defaultProps = {
  filter: 'All',
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
