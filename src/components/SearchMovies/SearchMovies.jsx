import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import {
  Button,
  SearchForm,
  SearchMoviesHeader,
  SearchForInput,
} from 'components/SearchMovies/SearchMovies.styled';

const SearchMovies = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');

  const changeFilter = event => {
    setQuery(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    if (!query) return;
    if (searchParams.get('query') === query) {
      toast.success(
        `You have already entered the query :${query}.
        Please refresh the page and try again, or enter a different query.`
      );
      return;
    }
    setSearchParams({ query });
    handleSubmit(query);
    setQuery('');
  };
  return (
    <SearchMoviesHeader>
      <SearchForm onSubmit={onSubmit}>
        <Button type="submit">
          <span>Search</span>
        </Button>
        <SearchForInput
          type="text"
          onChange={changeFilter}
          name="query"
          placeholder="Search movies"
        ></SearchForInput>
      </SearchForm>
      <Toaster />
    </SearchMoviesHeader>
  );
};

export default SearchMovies;
SearchMovies.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
