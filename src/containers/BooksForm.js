import React from 'react';

function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input type="text" placeholder="title" />
      <select name="category" id="category">
        {categories.map(cat => (
          <option value={cat} key={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BooksForm;
