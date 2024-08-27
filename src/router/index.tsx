import GoodsDetail from 'pages/GoodsDetail';
import Main from 'pages/Main';
import Notification from 'pages/Notification';
import Upload from 'pages/Upload';
import { useRoutes } from 'react-router-dom';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: 'asdf', element: '' },
        { path: 'asdff', element: '' }
      ]
    },
    {
      path: '/goodsDetail',
      element: <GoodsDetail />,
      children: [
        { path: 'asdf', element: '' },
        { path: 'asdff', element: '' }
      ]
    },
    {
      path: '/upload',
      element: <Upload />,
      children: [
        { path: 'asdf', element: '' },
        { path: 'asdff', element: '' }
      ]
    },
    {
      path: '/notification',
      element: <Notification />,
      children: [
        { path: 'asdf', element: '' },
        { path: 'asdff', element: '' }
      ]
    }
  ]);
}
