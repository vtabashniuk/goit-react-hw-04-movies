import React, { Component } from 'react';

import styles from './SearchForm.module.css';

class SearchForm extends Component {
  state = { searchQuery: '' };

  onSearchHandler = event => {
    const inputValue = event.currentTarget.value;
    this.setState({ searchQuery: inputValue });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.formReset();
  };

  formReset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <>
        <form className={styles.searchForm} onSubmit={this.onSubmitHandler}>
          <input
            className={styles.input}
            type="search"
            autoComplete="off"
            placeholder="Search movies..."
            onChange={this.onSearchHandler}
            value={this.state.searchQuery}
          />
        </form>
      </>
    );
  }
}
export default SearchForm;
