import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { MainApp } from './layout/MainApp'
import {Provider} from 'react-redux';
import store from './app/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";


const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <MainApp/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
