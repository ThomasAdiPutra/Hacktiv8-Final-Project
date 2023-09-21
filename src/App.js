/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
