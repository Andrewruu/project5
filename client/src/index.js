import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}> 
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
