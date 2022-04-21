import { getImagePath, searchMovie } from 'components/api/fetchFunctions';
import React, { Component } from 'react';
import queryString from 'query-string';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';

class MoviesPage extends Component {
  state = {
    moviesResult: [],
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (
      prevProps.location.search !== this.props.location.search &&
      Boolean(this.queryStringParse())
    ) {
      this.searchResultHandling();
    }
  };

  componentDidMount = async () => {
    if (this.props.location.search !== '') {
      this.searchResultHandling();
    }
  };

  formSubmitHandler = query => {
    this.props.history.push({ search: `?query=${query}` });
  };

  queryStringParse = () => {
    const parsingResult = queryString.parse(this.props.location.search);
    return parsingResult.query;
  };

  searchResultHandling = async () => {
    const movies = await searchMovie(this.queryStringParse());
    const configResult = await getImagePath();
    const basePosterPath = `${
      configResult.base_url
    }${configResult.poster_sizes.find(sizes => sizes === 'w342')}`;

    this.setState({
      moviesResult: movies.map(item => {
        return {
          ...{
            id: item.id,
            original_title: item.original_title,
            poster_path: `${basePosterPath}${item.poster_path}`,
          },
        };
      }),
    });
  };

  render() {
    return (
      <div className='container'>
        <SearchForm onSubmit={this.formSubmitHandler} />
        {this.props.location.search !== '' ? (
          <MoviesList movies={this.state.moviesResult} />
        ) : null}
      </div>
    );
  }
}

export default MoviesPage;
