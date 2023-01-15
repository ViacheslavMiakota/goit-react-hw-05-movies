import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  SearchForm,
  SearchMoviesHeader,
  SearchForInput,
} from 'components/SearchMovies/SearchMovies.styled';

const SearchMovies = ({ handleSubmit, onChange }) => {
  const onSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    if (!query) return;
    handleSubmit(query);
    event.target.reset();
  };
  return (
    <SearchMoviesHeader>
      <SearchForm onSubmit={onSubmit}>
        <Button type="submit">
          <span>Search</span>
        </Button>
        <SearchForInput
          type="text"
          onChange={event => onChange(event.target.value)}
          name="query"
          placeholder="Search movies"
        ></SearchForInput>
      </SearchForm>
    </SearchMoviesHeader>
  );
};

export default SearchMovies;
SearchMovies.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
