import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
// import {store} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Main/>
      
    </PersistGate>
  </Provider>
  </BrowserRouter>
);
