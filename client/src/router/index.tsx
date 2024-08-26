import { useRoutes } from 'react-router-dom';

import History from 'pages/History';
import GoodsDetail from 'pages/GoodsDetail';
import Main from 'pages/Main';
import Result from 'pages/Result';
import Upload from 'pages/Upload';
import Notification from 'pages/Notification';
import Profile from 'pages/Profile';
import Auth from 'pages/Auth';
import Callback from 'pages/Callback';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { path: '/', element: <Main /> },
        { path: 'auth', element: <Auth /> },
        { path: 'search-result/:product', element: <Result /> },
        { path: 'search-history', element: <History /> },
        { path: 'goodsDetail/:id', element: <GoodsDetail /> },
        { path: 'upload', element: <Upload /> },
        { path: 'notification', element: <Notification /> },
        { path: 'profile/:id', element: <Profile /> },
        { path: 'google/callback', element: <Callback /> }
      ]
    }
  ]);
}
