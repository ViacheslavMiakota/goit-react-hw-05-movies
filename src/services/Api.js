import axios from 'axios';

const API_KEY = 'ac538821321dbdf821a0803f810cef26';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchResult = async () => {
  const search = `trending/movie/day?api_key=${API_KEY}`;
  const response = await axios.get(search);
  return response.data;
  //   .map(({ id, release_date, title, poster_path }) => ({
  //   id,
  //   release_date,
  //   title,
  //   poster_path,
  // }));
};
export const fetchMoviesName = async (query, page) => {
  const search = `search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
  const response = await axios.get(search);
  return response.data;
  //   .map(
  //   ({ id, release_date, title, poster_path, popularity }) => ({
  //     id,
  //     release_date,
  //     title,
  //     poster_path,
  //     popularity,
  //   })
  // );
};
export const fetchMoviesDetail = async movieId => {
  const search = `movie/${movieId}?api_key=${API_KEY}`;
  const data = await axios.get(search);
  return data;
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
