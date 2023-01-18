import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesDetail } from 'services/Api';
import Loader from 'components/Loader/Loader';
import { MovieDetailsItem } from 'components/MovieDetailsItem/MovieDetailsItem';
import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';

export const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const movieId = id;

  useEffect(() => {
    const controller = new AbortController();
    async function FetchMovieId() {
      try {
        setLoading(true);
        const { data } = await fetchMoviesDetail(movieId);
        setMovie(data);
      } catch (error) {
        return;
      } finally {
        setLoading(false);
      }
    }
    FetchMovieId();
    return () => {
      controller.abort();
    };
  }, [movieId]);
  return (
    movie && (
      <>
        <ButtonGoBack />
        {loading && <Loader isLoading={loading} />}
        {movie && <MovieDetailsItem movieInfo={movie} />}
      </>
    )
  );
};
