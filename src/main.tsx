import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'
import { SDKProvider } from '@tma.js/sdk-react';

import './index.css'

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <SDKProvider acceptCustomStyles debug>
      <App />
      </SDKProvider>
  </React.StrictMode>,
)
