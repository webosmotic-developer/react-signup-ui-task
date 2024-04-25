import React, { Suspense } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

const SignUp = React.lazy(() => import('./pages/signup/SignUp'));
const SignIn = React.lazy(() => import('./pages/login/Login'));

export const AppRouting = () => {
  const defaultNavigate = <Navigate to={'./signup'} />;

  const getRouteWrapper = (component, authRoute = true) => {
    return (
      <Suspense
        fallback={
          <div
            style={{
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Loading...
          </div>
        }
      >
        {component}
      </Suspense>
    );
  };

  const routes = [
    {
      path: '/login',
      element: getRouteWrapper(<SignIn />),
    },
    {
      path: '/signup',
      element: getRouteWrapper(<SignUp />),
    },
    {
      path: '/toc',
      element: getRouteWrapper(<SignUp />),
    },
    {
      path: '/privacy-policy',
      element: getRouteWrapper(<SignUp />),
    },

    {
      index: true,
      element: defaultNavigate,
    },
  ];
  const router = useRoutes(routes);
  return <>{router}</>;
};
