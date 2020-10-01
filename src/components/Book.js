import PropTypes from 'prop-types';
import React from 'react';

function Book({ book, removeBookFromState }) {
  const { title, category } = book;
  return (
    <div className="book-wrap">
      <div className="left-center">
        <div id="left">
          <div className="book-props">
            <h5>{category}</h5>
            <h2>{title}</h2>
          </div>
          <div className="button-actions">
            <button type="button" disabled>Comments</button>
            <button
              type="button"
              className="delete"
              onClick={() => removeBookFromState(book)}
            >
              Remove
            </button>
            <button type="button" disabled>Edit</button>
          </div>
        </div>
        <div id="center">
          <div className="progress" />
          <div className="percent">
            <h1 className="percentage">77%</h1>
            <h4 className="completed">Completed</h4>
          </div>
        </div>
      </div>
      <div id="right">
        <div className="current all-caps">Current Chapter</div>
        <div className="chapter">Chapter 12</div>
        <button type="button">Update Progress</button>
      </div>
    </div>
  // <tr>
  //   <td>
  //     {id}
  //   </td>
  //   <td>
  //     {title}
  //   </td>
  //   <td>
  //     {category}
  //   </td>
  //   <td>
  //     <button
  //       type="button"
  //       onClick={() => removeBookFromState(book)}
  //     >
  //       Delete Book

  //     </button>
  //   </td>
  // </tr>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  removeBookFromState: PropTypes.func.isRequired,
};

export default Book;
