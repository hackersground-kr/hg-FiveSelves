import History from 'pages/History';
import GoodsDetail from 'pages/GoodsDetail';
import Main from 'pages/Main';
import Result from 'pages/Result';
import { useRoutes } from 'react-router-dom';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { path: '/', element: <Main /> },
        { path: 'asdff', element: '' },
        { path: 'search-result/:product', element: <Result /> },
        { path: 'search-history', element: <History /> }
      ]
    },
    {
      path: '/goodsDetail',
      element: <GoodsDetail />,
      children: [
        { path: 'asdf', element: '' },
        { path: 'asdff', element: '' }
      ]
    }
  ]);
}
