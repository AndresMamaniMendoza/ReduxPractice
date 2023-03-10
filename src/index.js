import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ReduxProvider>
);

