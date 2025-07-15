import React, { lazy } from 'react';

export const RemoteLogin = lazy(() =>
  import('mfe_login/Login')
    .then((module) => module)
    .catch((err) => {
      console.log('Error loading mfe_login', err);
      return { default: () => <div>Error loading Login</div> };
    })
);
