import PropTypes from 'prop-types';
import React from 'react';

function Book({ book: { id, title, category } }) {
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
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
