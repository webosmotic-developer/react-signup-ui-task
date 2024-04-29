import React, { Suspense } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

const PrivacyPolicy = React.lazy(
  () => import('./pages/privacy-policy/PrivacyPolicy')
);
const TermsAndConditions = React.lazy(
  () => import('./pages/terms-and-conditions/TermsAndConditions')
);

const SignUp = React.lazy(() => import('./pages/signup/SignUp'));
const Login = React.lazy(() => import('./pages/login/Login'));

export const AppRouting = () => {
  const defaultNavigate = <Navigate to={'./signup'} />;

  const getRouteWrapper = (component) => {
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
      element: getRouteWrapper(<Login />),
    },
    {
      path: '/signup',
      element: getRouteWrapper(<SignUp />),
    },
    {
      path: '/toc',
      element: getRouteWrapper(<TermsAndConditions />),
    },
    {
      path: '/privacy-policy',
      element: getRouteWrapper(<PrivacyPolicy />),
    },

    {
      index: true,
      element: defaultNavigate,
    },
  ];
  const router = useRoutes(routes);
  return <>{router}</>;
};
