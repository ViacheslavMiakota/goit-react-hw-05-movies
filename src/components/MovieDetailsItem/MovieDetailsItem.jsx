import { Outlet, useLocation } from 'react-router-dom';
import { getSrc, genreSelection } from 'services/Api';
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

  const { release_date, genres, title, vote_average, overview, poster_path } =
    movieInfo;

  return (
    <>
      <Title>
        {title}
        <span>(</span>
        {release_date}
        <span>)</span>
      </Title>
      <DetailsBox>
        <Image src={getSrc(poster_path)} alt={title} />
        <DetailsContext>
          <TitleH3>
            User score: <Span>{vote_average} %</Span>
          </TitleH3>
          <TitleH3>
            Overview: <Span>{overview}</Span>
          </TitleH3>
          <TitleH3>
            Genres: <Span>{genreSelection(genres)}</Span>
          </TitleH3>
        </DetailsContext>
      </DetailsBox>
      <TitleH4>Additional information</TitleH4>
      <Information>
        <AddInfoLink to={`cast`} state={location.state}>
          Cast
        </AddInfoLink>
        <AddInfoLink to={`reviews`} state={location.state}>
          Reviews
        </AddInfoLink>
      </Information>
      <Outlet />
    </>
  );
};
