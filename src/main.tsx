import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mainTheme } from './styles/theme';
import App from './App';
import Providers from './contexts/Providers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <ToastContainer />
        <Providers>
          <App />
        </Providers>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
