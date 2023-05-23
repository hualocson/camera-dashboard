import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'App/index';
import Notification from 'components/Notification/Notification';

import store from 'store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Notification />
    </BrowserRouter>
  </Provider>,
);
