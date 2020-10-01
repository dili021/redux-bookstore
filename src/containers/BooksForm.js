import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createID } from '../initState';
import { createBook } from '../actions/index';
import { categories } from '../components/CategoryFilter';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: createID(),
      title: '',
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    if (target.id === 'title') this.setState({ title: target.value });
    if (target.id === 'category') this.setState({ category: target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    const { createBook } = this.props;
    if (title) {
      createBook(this.state);
      this.setState({
        id: createID(),
        title: '',
        category: categories[0],
      });
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" id="title" value={title} placeholder="title" />
        <select onChange={this.handleChange} name="category" id="category">
          {categories.map(cat => (
            <option value={cat} key={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
