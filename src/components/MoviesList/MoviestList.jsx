import MoviesItem from 'components/MoviesItem/MoviesItem';
import { List, Card } from 'components/MoviesList/MoviesList.styled';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies &&
        movies.map(({ id, release_date, title, poster_path }) => (
          <Card key={id}>
            <MoviesItem
              id={id}
              release={release_date}
              title={title}
              poster={poster_path}
            />
          </Card>
        ))}
    </List>
  );
};
export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
