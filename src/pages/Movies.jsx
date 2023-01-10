import { useState, useEffect } from 'react';

import SearchMovies from 'components/SearchMovies/SearchMovies';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMoviesName } from 'services/Api';
import MoviesList from 'components/MoviesList/MoviestList';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total_results, setTotal_results] = useState(0);

  useEffect(() => {
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
          ({
            id,
            release_date,
            title,
            poster_path,
            popularity,
            backdrop_path,
          }) => ({
            id,
            release_date,
            title,
            poster_path,
            popularity,
            backdrop_path,
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
  }, [query, page]);
  const handleSubmit = newQuery => {
    if (newQuery === query) {
      toast.success(
        `You have already entered the query :${query}.
        Please refresh the page and try again, or enter a different query.`
      );
      return;
    }
    setQuery(newQuery);
    setResults([]);
    setPage(1);
  };
  const incrementMovies = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <main>
      <SearchMovies handleSubmit={handleSubmit} />
      {results.length > 0 && <MoviesList movies={results} />}
      {Boolean(total_results) &&
        total_results !== results.length &&
        !loading && <Button loadMoreProp={incrementMovies} />}
      {loading && <Loader isLoading={loading} />}
      <Toaster />
    </main>
  );
};
