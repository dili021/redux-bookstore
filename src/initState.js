export const createID = () => Math.floor((Math.random() * 1000) + 1);

export default {
  books: [
    {
      id: createID(),
      title: 'Bhagavad Gita',
      category: 'History',
    },
    {
      id: createID(),
      title: 'The Raven',
      category: 'Horror',
    },
    {
      id: createID(),
      title: 'The Four Agreements',
      category: 'Learning',
    },
    {
      id: createID(),
      title: 'Poor Charlie\'s Almanac',
      category: 'Biography',
    },
  ],
  filter: 'All',
};
