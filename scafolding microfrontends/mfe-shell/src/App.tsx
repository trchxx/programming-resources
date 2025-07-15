import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MfeRoutes } from './components/routes/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/reactQuery';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MfeRoutes></MfeRoutes>}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
