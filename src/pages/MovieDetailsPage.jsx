import React, { Component } from 'react';
import { getImagePath, getMovieDetails } from 'components/api/fetchFunctions';
import { NavLink, Route } from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

class MovieDetailsPage extends Component {
  state = {
    title: '',
    poster_path: '',
    release_date: '',
    genres: [],
    overview: '',
  };

  componentDidMount = async () => {
    const configResult = await getImagePath();
    const basePosterPath = `${
      configResult.base_url
    }${configResult.poster_sizes.find(sizes => sizes === 'w342')}`;

    const { title, poster_path, release_date, genres, overview } =
      await getMovieDetails(this.props.match.params.movieId);

    this.setState({
      title,
      poster_path: `${basePosterPath}${poster_path}`,
      release_date,
      genres,
      overview,
    });
  };

  goBachHandler = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from || '/');
  };

  render() {
    const { title, poster_path, release_date, genres, overview } = this.state;
    const { match, location } = this.props;
    return (
      <div className="container">
        <button type="button" onClick={this.goBachHandler}>
          &#8666; Go back
        </button>
        <h1 className="movieTitle">{title}</h1>
        <div className="movieThumb">
          <img
            className="movieImage"
            src={poster_path}
            alt={`Poster: ${title}`}
          />
          <div className="movieDescription">
            <p>Release date: {release_date}</p>
            <h3>Genres:</h3>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
            <h3>Overview</h3>
            <p className="movieOverview">{overview}</p>
            <h3>Additional info</h3>
            <ul className="movieAdditionalList">
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/cast`,
                    state: { from: location.state.from },
                  }}
                  className="movieAdditional"
                  activeClassName="movieAdditionalActive"
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: { from: location.state.from },
                  }}
                  className="movieAdditional"
                  activeClassName="movieAdditionalActive"
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="castAndReviews">
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </div>
      </div>
    );
  }
}
export default MovieDetailsPage;
