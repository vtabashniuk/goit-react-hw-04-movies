import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from 'routes';
import Header from './components/Header/index';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/PacmanLoader';

const override = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  border-color: red;
`;

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('pages/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */)
);

export const App = () => (
  <>
    <Header />
    <Suspense
      fallback={
        <div className="sweet-loading">
          <ClipLoader
            css={override}
            size={50}
            color={'#892BE2'}
            loading={true}
            speedMultiplier={1.2}
          />
        </div>
      }
    >
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Redirect to={routes.home} />
      </Switch>
    </Suspense>
  </>
);
