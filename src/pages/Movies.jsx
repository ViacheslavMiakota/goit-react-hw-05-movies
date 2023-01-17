import { useState, useEffect } from 'react';

import SearchMovies from 'components/SearchMovies/SearchMovies';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMoviesName } from 'services/Api';
import MoviesList from 'components/MoviesList/MoviestList';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total_results, setTotal_results] = useState(0);
  const [searchParams] = useSearchParams('');

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    async function fetshBase() {
      try {
        setLoading(true);
        const { results, total_results } = await fetchMoviesName(query, page);
        if (!total_results) {
          toast.success(`Nothing found for your request :${query}`);
          return;
        }
        const movies = results.map(
          ({ id, release_date, title, poster_path, popularity }) => ({
            id,
            release_date,
            title,
            poster_path,
            popularity,
          })
        );
        setResults(prevResults => [...prevResults, ...movies]);
        setTotal_results(total_results);
      } catch (error) {
        toast.error('Something went wrong : Try reloading the page.');
      } finally {
        setLoading(false);
      }
    }
    fetshBase();
  }, [searchParams, page]);

  const handleSubmit = () => {
    setResults([]);
    setPage(1);
  };

  const incrementMovies = () => {
    setPage(prevPage => prevPage + 1);
  };

  const showButton =
    Boolean(total_results) && total_results !== results.length && !loading;
  return (
    <main>
      <SearchMovies handleSubmit={handleSubmit} />
      {results.length > 0 && <MoviesList movies={results} />}
      {showButton && <Button loadMoreProp={incrementMovies} />}
      {loading && <Loader isLoading={loading} />}
      <Toaster />
    </main>
  );
};
