import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PushNotificationWrapper } from './components';
import App from './App';
import './index.css';
import '@config/i18';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading">
      <BrowserRouter>
        <PushNotificationWrapper>
          <App />
        </PushNotificationWrapper>
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>,
);
