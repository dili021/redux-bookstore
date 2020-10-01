const createBook = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const removeBook = ({ title }) => ({
  type: 'REMOVE_BOOK',
  payload: title,
});

export { createBook, removeBook };
