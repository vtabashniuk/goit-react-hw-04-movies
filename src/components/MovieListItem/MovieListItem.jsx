import React from 'react';
import styles from './MovieListItem.module.css';

const MovieListItem = ({ poster_path, original_title }) => {
  return (
    <div className={styles.thumb}>
      <img src={poster_path} alt={original_title} />
      <p className={styles.title}>
        {original_title.length < 33
          ? original_title
          : `${original_title.slice(0, 29)}...`}
      </p>
    </div>
  );
};

export default MovieListItem;
