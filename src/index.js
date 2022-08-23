import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cart.context';

import { store } from './store/store';
import { Provider } from 'react-redux';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>     
          <CartProvider>
              <App />
          </CartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

