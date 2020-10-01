const filter = (filter = 'All', { type, payload }) => {
  if (type === 'CHANGE_FILTER') {
    return payload;
  }
  return filter;
};

export default filter;
