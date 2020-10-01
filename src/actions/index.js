const createBook = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const removeBook = book => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

const changeFilter = category => ({
  type: 'CHANGE_FILTER',
  payload: category,
});

export { createBook, removeBook, changeFilter };
