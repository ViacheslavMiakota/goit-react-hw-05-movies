import { useState, useEffect } from 'react';
import { fetchActors } from 'services/Api';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { CastListUL } from 'components/MovieDetailsItem/MovieDetailsItem.styled';

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
        console.log(data);
        const moviesActors = data.map(({ id, name, gender, profile }) => ({
          id,
          name,
          gender,
          profile,
        }));
        setCast(prevCast => [...prevCast, ...moviesActors]);
      } catch (error) {
        return;
      } finally {
        setLoading(false);
      }
    }
    Actors();
  }, [movieId]);
  return (
    console.log(cast),
    (
      <>
        <CastListUL>
          {loading && <Loader />}
          {cast &&
            cast.map(({ id, name, gender, profile }) => (
              <div>
                <p>{name}</p>
                <p>{id}</p>
                <p>{gender}</p>
                <p>{profile}</p>
              </div>
            ))}
        </CastListUL>
        {/* {loading && <Loader />}
      {cast && !loading ? (
        <p> We don't have any actors</p>
      ) : (
        <div>
          {cast &&
            cast.map(({ id, name, gender, profile }) => (
              <div key={id}>
                <img
                  src={
                    profile
                      ? 'https://image.tmdb.org/t/p/w500' + profile
                      : 'https://louisville.edu/history/images/noimage.jpg/image'
                  }
                  alt={name}
                  width="150"
                  height="100%"
                ></img>
                <p>{genderSwitcher(gender)}</p>
                <p>{name}</p>
              </div>
            ))}
        </div>
      )} */}
      </>
    )
  );
};
