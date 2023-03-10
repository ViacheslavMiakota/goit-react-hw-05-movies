import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchResult } from 'services/Api';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviestList';
import { H1 } from 'components/MoviesItem/MoviesItem.styled';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchBase() {
      try {
        setLoading(true);
        const { moviesData } = await fetchResult(controller.signal);

        setTrendingMovies(prevMovies => [...prevMovies, ...moviesData]);
      } catch (error) {
        toast.error('Something went wrong : Try reloading the movie.');
        setTrendingMovies([]);
      } finally {
        setLoading(false);
      }
    }
    fetchBase();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    trendingMovies && (
      <>
        <H1>Trending today</H1>
        {loading && <Loader isLoading={loading} />}
        {trendingMovies.length > 0 && <MoviesList movies={trendingMovies} />}
        <Toaster position="top-center" />
      </>
    )
  );
};
