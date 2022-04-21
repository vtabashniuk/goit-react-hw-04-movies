import React, { Component } from 'react';
import MoviesList from 'components/MoviesList/MoviesList.jsx';
import { getImagePath, getTrending } from '../components/api/fetchFunctions.js';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    const trending = await getTrending();
    const configResult = await getImagePath();
    const basePosterPath = `${
      configResult.base_url
    }${configResult.poster_sizes.find(sizes => sizes === 'w342')}`;
    this.setState({
      movies: trending.map(item => {
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
    const { movies } = this.state;

    return (
      <div className="container">
        <h1 className="homePageTitle">Week trending</h1>
        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default HomePage;
