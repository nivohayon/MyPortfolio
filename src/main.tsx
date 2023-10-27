import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './hooks/useAppNavigation.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={routes.Home} element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
