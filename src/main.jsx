import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { ThemeProvider } from './components/ThemeProvider/ThemeProvider.jsx';
import store from './redux/store.js';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_routerProviderHydration: true,
      }}
    >
      <Provider store={store}>
        {/* <ThemeProvider> */}
        <App />
        {/* </ThemeProvider> */}
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
