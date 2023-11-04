import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import BackgroundProvider from './components/BackgroundProvider/BackgroundProvider.tsx';
import StoreProvider from './store/store.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <BackgroundProvider>
        <App />
      </BackgroundProvider>
    </StoreProvider>
  </React.StrictMode>
);
