import MovieListItem from 'components/MovieListItem';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routes from 'routes';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <>
      <ul className={styles.list}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              className={styles.link}
              to={{
                pathname: `${routes.movies}/${movie.id}`,
                state: { from: location },
              }}
            >
              <MovieListItem
                poster_path={movie.poster_path}
                original_title={movie.original_title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default withRouter(MoviesList);
