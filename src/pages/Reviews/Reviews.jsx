import { useState, useEffect } from 'react';
import { fetchReviews } from 'services/Api';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import {
  RevievsUL,
  RevievsLi,
  RevievsP,
  RevievsError,
} from 'pages/Reviews/Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const movieId = id;

  useEffect(() => {
    async function reedReviews() {
      try {
        setLoading(true);
        const { data } = await fetchReviews(movieId);
        console.log(data.results);
        setReviews(data.results);
      } catch (error) {
        return;
      } finally {
        setLoading(false);
      }
    }
    reedReviews();
  }, [movieId]);
  return (
    console.log(reviews),
    (
      <>
        {loading && <Loader isLoading={loading} />}
        {reviews.length === 0 && !loading ? (
          <RevievsError> We don't have any reviews</RevievsError>
        ) : (
          <RevievsUL>
            {reviews &&
              reviews.map(({ id, author, content, updated_at }) => (
                <RevievsLi key={id}>
                  <RevievsP>Author :{author}</RevievsP>
                  <RevievsP>{content}</RevievsP>

                  <RevievsP>Update :{updated_at}</RevievsP>
                </RevievsLi>
              ))}
          </RevievsUL>
        )}
      </>
    )
  );
};
