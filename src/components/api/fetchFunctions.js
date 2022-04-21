import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'df60f1682cfdb2a273d4df0e1e89ea6f';
const axiosParams = {
  params: { api_key: API_KEY },
};

export const getImagePath = async () => {
  const path = await axios.get(`${BASE_URL}/configuration`, axiosParams);
  return path.data.images;
};

export const getTrending = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/week`, axiosParams);
  return response.data.results;
};

export const getMovieDetails = async id => {
  const details = await axios.get(`${BASE_URL}/movie/${id}`, axiosParams);
  return details.data;
};

export const getCast = async id => {
  const cast = await axios.get(`${BASE_URL}/movie/${id}/credits`, axiosParams);
  return cast.data.cast.map(item => {
    return {
      ...{
        original_name: item.original_name,
        character: item.character,
        popularity: item.popularity,
        profile_path: item.profile_path,
      },
    };
  });
};

export const getReviews = async id => {
  const reviews = await axios.get(
    `${BASE_URL}/movie/${id}/reviews`,
    axiosParams
  );
  return reviews.data.results.map(item => {
    return {
      ...{
        author: item.author,
        content: item.content,
      },
    };
  });
};

export const searchMovie = async query => {
  const movies = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query },
  });

  return movies.data.results;
};
