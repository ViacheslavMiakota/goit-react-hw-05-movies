import { Route, Routes } from 'react-router-dom';

import { Movies } from 'pages/Movies';
import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'pages/Cast';

import { Container, Header, Logo, Link } from 'components/App/App.styled';
import { FcCamcorderPro } from 'react-icons/fc';

const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            <FcCamcorderPro size="45px" />
          </span>{' '}
          The best videos now
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          {/* <Route path="/reviews" element={<Reviews />} /> */}
        </Route>
      </Routes>
    </Container>
  );
};
export default App;
