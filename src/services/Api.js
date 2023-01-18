import axios from 'axios';

const API_KEY = 'ac538821321dbdf821a0803f810cef26';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchResult = async signal => {
  const search = `trending/movie/day?api_key=${API_KEY}`;

  try {
    const response = await axios.get(search, { signal });
    const { results } = response.data;
    const moviesData = results.map(
      ({ id, release_date, title, poster_path }) => ({
        id,
        release_date,
        title,
        poster_path,
      })
    );
    return { moviesData };
  } catch (error) {
    if (axios.isCancel(error)) {
      return { moviesData: [] };
    }
    throw new Error(error);
  }
};
export const fetchMoviesName = async (query, page, signal) => {
  const search = `search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
  try {
    const response = await axios.get(search, { signal });
    const { results, total_results } = response.data;
    const movies = results.map(
      ({ id, release_date, title, poster_path, popularity }) => ({
        id,
        release_date,
        title,
        poster_path,
        popularity,
      })
    );
    return { movies, total_results };
  } catch (error) {
    if (axios.isCancel(error)) {
      return { movies: [] };
    }
    throw new Error(error);
  }
};
export const fetchMoviesDetail = async (movieId, signal) => {
  const search = `movie/${movieId}?api_key=${API_KEY}`;
  try {
    const data = await axios.get(search, { signal });
    return data;
  } catch (error) {
    if (axios.isCancel(error)) {
      return { data: [] };
    }
    throw new Error(error);
  }
};
export const fetchActors = async movieId => {
  const search = `movie/${movieId}/credits?api_key=${API_KEY}`;
  const response = await axios.get(search);
  return response;
};
export const fetchReviews = async movieId => {
  const search = `movie/${movieId}/reviews?api_key=${API_KEY}`;
  const response = await axios.get(search);
  return response;
};
export const getSrc = url =>
  url
    ? `https://image.tmdb.org/t/p/w300${url}`
    : 'https://louisville.edu/history/images/noimage.jpg/image';

export const genreSelection = data => {
  if (data === null) return;
  return data.map(gen => gen.name).join(', ');
};
