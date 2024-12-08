import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/404';
import MoviesDetails from '../pages/Details/MoviesDetails.tsx';
import SeriesDetails from '../pages/Details/SeriesDetails.tsx';
import Error from '../pages/Error';
import Homepage from '../pages/Home.tsx';
import Layout from '../pages/Layout.tsx';
import Player from '../pages/Player.tsx';
import Search from '../pages/Search.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/series/details/:id',
        element: <SeriesDetails />,
      },
      {
        path: '/movies/details/:id',
        element: <MoviesDetails />,
      },

      {
        path: '/search',
        element: <Search />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: '/watch/:id',
    element: <Player />,
  },
]);

export { router };
