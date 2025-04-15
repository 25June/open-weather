import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom';
import ResultPage from 'pages/ResultPage/ResultPage';
import HistoryPage from 'pages/HistoryPage/HistoryPage';
import Layout from 'components/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/result',
        element: <ResultPage />,
      },
      {
        path: '/history',
        element: <HistoryPage />,
      },
    ],
  },
]);
const RouterProvider = () => <ReactRouterProvider router={router} />;
export default RouterProvider;
