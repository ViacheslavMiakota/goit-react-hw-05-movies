import {
  CardLink,
  CardBottom,
  CardTitle,
  Image,
  H4,
  Span,
} from 'components/MoviesItem/MoviesItem.styled';

const MoviesItem = ({ release, title, poster }) => {
  return (
    <CardLink>
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
