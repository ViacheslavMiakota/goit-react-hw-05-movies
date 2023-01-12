import { useNavigate, useLocation } from 'react-router-dom';

import { BackButton } from 'components/ButtonGoBack/ButtoGoBack.styled';

export const ButtonGoBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <BackButton
      onClick={() => {
        navigate(location?.state?.from ?? '/');
      }}
    >
      Go back
    </BackButton>
  );
};
