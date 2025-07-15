import React, { lazy } from 'react';

export const RemoteLocations = lazy(() =>
  import('mfe_locations/Locations')
    .then((module) => module)
    .catch((err) => {
      console.log('Error loading mfe_locations', err);
      return { default: () => <div>Error loading Locations</div> };
    })
);

export const RemoteLocationDetail = lazy(() =>
  import('mfe_locations/LocationDetail')
    .then((module) => module)
    .catch((err) => {
      console.log('Error loading mfe_locations', err);
      return { default: () => <div>Error loading Location Detail</div> };
    })
);
