import { useState, useEffect } from 'react';
import { fetchMoviesDetail } from 'services/Api';
import Loader from 'components/Loader/Loader';
import MovieDetailsItem from 'components/MovieDetailsItem/MovieDetailsItem';

export const MovieDetails = () => {
  const [movieId, setMovieId] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function FetchMovieId() {
      try {
        setLoading(true);
        const { results } = await fetchMoviesDetail(movieId);
        console.log(moviesId);
        const moviesId = results.map(
          ({ id, release_date, title, poster_path }) => ({
            id,
            release_date,
            title,
            poster_path,
          })
        );
        setMovieId(prevMoviesId => [...prevMoviesId, ...moviesId]);
      } catch (error) {
        return;
      } finally {
        setLoading(false);
      }
    }
  }, []);
  return (
    movieId && (
      <>
        {/* <ButtonGoBack /> */}
        {loading && <Loader />}
        {movieId && <MovieDetailsItem movieInfo={movieId} />}
      </>
    )
  );
};
