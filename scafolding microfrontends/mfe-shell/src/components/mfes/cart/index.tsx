import React, { lazy } from 'react';

export const RemoteCart = lazy(() =>
  import('mfe_cart/Cart')
    .then((module) => module)
    .catch((err) => {
      console.log('Error loading mfe_cart', err);
      return { default: () => <div>Error loading Cart</div> };
    })
);
