// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider.jsx';
import store from './redux/store.js';
import './index.css';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_routerProviderHydration: true,
    },
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
