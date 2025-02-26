import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import HttpRequestPost from './9-Http/04-sending-a-post-request/HttpRequestPost';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HttpRequestPost

    />
  </React.StrictMode>
);

reportWebVitals();
