import React, { Suspense, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { RemoteHeader } from '../mfes/header';
import { RemoteLogin } from '../mfes/login';
import { RemoteCart } from '../mfes/cart';
import { AuthProvider } from 'gowid-shared-context';
import { useQueryClient } from '@tanstack/react-query';

export const LayoutPage: React.FC<{ children?: JSX.Element }> = ({
  children,
}: {
  children?: JSX.Element;
}) => {
  const client = useQueryClient();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
        <RemoteHeader client={client}></RemoteHeader>
        <RemoteLogin client={client}></RemoteLogin>
        <RemoteCart client={client}></RemoteCart>

        <Outlet />
        {children}

        <div
          style={{
            height: '150px',
            width: '100%',
            backgroundColor: '#1E6137',
            display: 'grid',
            placeItems: 'center',
            color: 'white',
            marginTop: '24px',
          }}
        >
          footer
        </div>
      </AuthProvider>
    </Suspense>
  );
};
