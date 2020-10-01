import PropTypes from 'prop-types';
import React from 'react';

function Book({ book, removeBookFromState }) {
  const { id, title, category } = book;
  return (
    <tr>
      <td>
        {id}
      </td>
      <td>
        {title}
      </td>
      <td>
        {category}
      </td>
      <td>
        <button
          type="button"
          onClick={() => removeBookFromState(book)}
        >
          Delete Book

        </button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  removeBookFromState: PropTypes.func.isRequired,
};

export default Book;
