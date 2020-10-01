import React from 'react';
import PropTypes from 'prop-types';

export const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

function CategoryFilter({ handleChange }) {
  return (
    <select id="category" onChange={e => handleChange(e)}>
      <option value="All">All</option>
      {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
    </select>
  );
}

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
