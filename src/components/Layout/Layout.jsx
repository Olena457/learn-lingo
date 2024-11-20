import { Suspense } from 'react';
import css from './Layout.module.css';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
