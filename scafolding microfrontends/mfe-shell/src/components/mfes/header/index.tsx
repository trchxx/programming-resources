import React, { lazy } from 'react';

export const RemoteHeader = lazy(() =>
  import('mfe_header/Header')
    .then((module) => module)
    .catch((err) => {
      console.log('Error loading mfe_header', err);
      return { default: () => <div>Error loading Header</div> };
    })
);
