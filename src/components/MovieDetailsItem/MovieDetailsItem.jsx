import { useLocation } from 'react-router-dom';
import {
  Title,
  Image,
  TitleH3,
  TitleH4,
  Span,
  AddInfoLink,
  Information,
  DetailsBox,
  DetailsContext,
} from 'components/MovieDetailsItem/MovieDetailsItem.styled';

export const MovieDetailsItem = ({ movieInfo }) => {
  const location = useLocation();
  const genreSelection = data => {
    if (data === null) return;
    return data.map(gen => gen.name).join(', ');
  };

  const {
    release_date,
    genres,
    title,
    vote_average,
    overview,
    poster_path,
    id,
  } = movieInfo;

  return (
    <>
      <Title>
        {title}
        <span>(</span>
        {release_date}
        <span>)</span>
      </Title>
      <DetailsBox>
        <Image
          src={
            poster_path
              ? 'https://image.tmdb.org/t/p/w500' + poster_path
              : 'https://louisville.edu/history/images/noimage.jpg/image'
          }
          alt={title}
        />
        <DetailsContext>
          <TitleH3>
            User score: <Span>{vote_average} %</Span>
          </TitleH3>
          <TitleH3>
            Overview: <Span>{overview}</Span>
          </TitleH3>
          <TitleH3>
            Genres:{' '}
            <Span>
              {vote_average}
              {genreSelection(genres)}
            </Span>
          </TitleH3>
        </DetailsContext>
      </DetailsBox>
      <TitleH4>Additional information</TitleH4>
      <Information>
        <AddInfoLink to={`/movies/${`${id}`}/cast`} state={{ from: location }}>
          Cast
        </AddInfoLink>
        <AddInfoLink to={`/movies/${` ${id}`}/reviews`} state={location.state}>
          Reviews
        </AddInfoLink>
      </Information>
    </>
  );
};
