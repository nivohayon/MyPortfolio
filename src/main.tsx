import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound.tsx';
import BackgroundProvider from './components/BackgroundProvider/BackgroundProvider.tsx';
import ComingSoon from './pages/ComingSoon/ComingSoon.tsx';
import { routes } from './routes/routes.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BackgroundProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.Home} element={<App />} />
          <Route path={routes.ComingSoon} element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BackgroundProvider>
  </React.StrictMode>
);
