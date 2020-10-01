export const createID = () => Math.floor((Math.random() * 1000) + 1);

export default {
  books: [
    {
      id: createID(),
      title: 'Lord Of The Rings',
      category: 'Fantasy',
    },
    {
      id: createID(),
      title: 'Tao Te Ching',
      category: 'Eastern Philosophy',
    },
    {
      id: createID(),
      title: 'The Four Agreements',
      category: 'Philosophy',
    },
    {
      id: createID(),
      title: 'Poor Charlie\'s Almanac',
      category: 'Biography',
    },
  ],
};
