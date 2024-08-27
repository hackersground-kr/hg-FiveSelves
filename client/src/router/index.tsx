import React, { ReactNode } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import History from 'pages/History';
import GoodsDetail from 'pages/GoodsDetail';
import Main from 'pages/Main';
import Result from 'pages/Result';
import Upload from 'pages/Upload';
import Notification from 'pages/Notification';
import Profile from 'pages/Profile';
import Auth from 'pages/Auth';
import Callback from 'pages/Callback';

interface PrivateRouteProps {
  children: ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ? children : <Navigate to="/auth" />;
}

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        {
          path: '/',
          element: (
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          )
        },
        { path: 'auth', element: <Auth /> },
        {
          path: 'search-result/:product',
          element: (
            <PrivateRoute>
              <Result />
            </PrivateRoute>
          )
        },
        {
          path: 'search-history',
          element: (
            <PrivateRoute>
              <History />
            </PrivateRoute>
          )
        },
        {
          path: 'goodsDetail/:id',
          element: (
            <PrivateRoute>
              <GoodsDetail />
            </PrivateRoute>
          )
        },
        {
          path: 'upload',
          element: (
            <PrivateRoute>
              <Upload />
            </PrivateRoute>
          )
        },
        {
          path: 'notification',
          element: (
            <PrivateRoute>
              <Notification />
            </PrivateRoute>
          )
        },
        {
          path: 'profile/:id',
          element: (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          )
        },
        { path: 'google/callback', element: <Callback /> }
      ]
    }
  ]);
}
