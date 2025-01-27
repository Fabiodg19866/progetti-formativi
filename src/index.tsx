import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import TestUnitTestAsAsync from './12-TestUnit/02-testing-async-code/components/TestUnitTestAsAsync';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App
    />
  </React.StrictMode>
);

reportWebVitals();
