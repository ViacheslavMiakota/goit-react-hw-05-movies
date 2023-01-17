import { useState, useEffect } from 'react';
import { fetchActors } from 'services/Api';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { getSrc } from 'services/Api';
import {
  CastUL,
  CastLi,
  CastIMg,
  CastP,
  CastBottom,
} from 'pages/Cast/Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const movieId = id;

  useEffect(() => {
    async function Actors() {
      try {
        setLoading(true);
        const { data } = await fetchActors(movieId);
        setCast(data.cast);
      } catch (error) {
        return;
      } finally {
        setLoading(false);
      }
    }
    Actors();
  }, [movieId]);
  return (
    <>
      {loading && <Loader isLoading={loading} />}
      {cast && loading ? (
        <p> We don't have any actors</p>
      ) : (
        <CastUL>
          {cast &&
            cast.map(({ id, name, character, profile_path }) => (
              <CastLi key={id}>
                <CastIMg
                  src={getSrc(profile_path)}
                  alt={name}
                  width="150"
                  height="100%"
                ></CastIMg>
                <CastBottom>
                  <CastP>{name}</CastP>
                  <CastP>Character:{character}</CastP>
                </CastBottom>
              </CastLi>
            ))}
        </CastUL>
      )}
    </>
  );
};
