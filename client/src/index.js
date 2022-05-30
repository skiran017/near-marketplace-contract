import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeContract } from './utils/near';
import App from './App';

window.nearInitPromise = initializeContract()
  .then(() => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch(console.error);
