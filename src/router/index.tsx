import Main from 'pages/Main';
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
    }
  ]);
}
