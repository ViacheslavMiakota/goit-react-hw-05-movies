import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSrc } from 'services/Api';
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
      <Image src={getSrc(poster)} alt={title} width="100%" height="100%" />
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
  release: PropTypes.string,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  id: PropTypes.number.isRequired,
};
