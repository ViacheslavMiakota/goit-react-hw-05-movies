import axios from 'axios';

const API_KEY = 'ac538821321dbdf821a0803f810cef26';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchResult = async () => {
  const search = `trending/movie/day?api_key=${API_KEY}`;
  const response = await axios.get(search);
  return response.data;
};
export const fetchMoviesName = async (query, page) => {
  const search = `search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
  const response = await axios.get(search);
  return response.data;
};
export const fetchMoviesDetail = async movie_id => {
  const search = `movie/${movie_id}?api_key=${API_KEY}`;
  const response = await axios.get(search);
  return response.data;
};
