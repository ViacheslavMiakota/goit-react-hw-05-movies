import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  CardLink,
  CardBottom,
  CardTitle,
  Image,
  H4,
  Span,
} from 'components/MoviesItem/MoviesItem.styled';

const MoviesItem = ({ release, title, poster, id }) => {
  const location = useLocation();
  return (
    <CardLink to={`/movies/${`${id}`}`} state={{ from: location }}>
      <Image
        src={
          poster
            ? `https://image.tmdb.org/t/p/w300${poster}`
            : 'https://louisville.edu/history/images/noimage.jpg/image'
        }
        alt={title}
        width="100%"
        height="100%"
      />
      <CardBottom>
        <CardTitle>{title}</CardTitle>
        <H4>
          Release date: <Span>{release}</Span>
        </H4>
      </CardBottom>
    </CardLink>
  );
};
export default MoviesItem;
MoviesItem.propTypes = {
  release: PropTypes.number,
  title: PropTypes.string.isRequired,
  poster: PropTypes.object,
  id: PropTypes.number.isRequired,
};
