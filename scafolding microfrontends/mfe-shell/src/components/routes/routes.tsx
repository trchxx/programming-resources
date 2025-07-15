import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RemoteLocationDetail, RemoteLocations } from '../mfes/locations';
import { LayoutPage } from './layout';
import { useQueryClient } from '@tanstack/react-query';

export const MfeRoutes = () => {
  const client = useQueryClient();

  return (
    <Routes>
      {/* Home page */}
      <Route
        path="*"
        element={
          <LayoutPage>
            <RemoteLocations client={client}></RemoteLocations>
          </LayoutPage>
        }
      ></Route>

      <Route
        path=":locationName/:locationId"
        element={
          <LayoutPage>
            <RemoteLocationDetail client={client}></RemoteLocationDetail>
          </LayoutPage>
        }
      ></Route>
    </Routes>
  );
};
