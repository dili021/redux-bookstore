const books = (books = [], { type, payload }) => {
  if (type === 'CREATE_BOOK') {
    return [...books, payload];
  }
  if (type === 'REMOVE_BOOK') {
    return books.filter(({ title }) => title !== payload.title);
  }
  return books;
};
export default books;
