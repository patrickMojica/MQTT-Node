import React from 'react';
// import { render } from 'react-dom';
// Note the change here
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//   document.getElementById('app'),
// );

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);