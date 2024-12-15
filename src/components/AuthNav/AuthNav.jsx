import { useState, lazy, Suspense } from 'react';
import css from './AuthNav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import logoutIcon from '../../icons/logout.svg';
import {
  selectIsLoggedIn,
  selectUser,
} from '../../redux/auth/selectorsAuth.js';
import { logoutUser } from '../../redux/auth/operationsAuth.js';

const ModalWindow = lazy(() => import('../ModalWindow/ModalWindow.jsx'));
const SignUp = lazy(() => import('../SignUp/SignUp.jsx'));
const SignIn = lazy(() => import('../SignIn/SignIn.jsx'));

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignUpOpen = () => setIsSignUpOpen(true);
  const handleSignInOpen = () => setIsSignInOpen(true);

  const handleSignUpClose = () => setIsSignUpOpen(false);
  const handleSignInClose = () => setIsSignInOpen(false);

  return (
    <div className={css.container}>
      {!isLoggedIn && (
        <div className={css.unsignWrapper}>
          <button
            type="button"
            onClick={handleSignInOpen}
            className={css.buttonLogin}
          >
            <img
              src={logoutIcon}
              alt="Logout icon"
              className={css.logoutIcon}
            />
            <span className={css.loginText}>log in</span>
          </button>
          <button
            type="button"
            onClick={handleSignUpOpen}
            className={css.buttonRegister}
          >
            Registration
          </button>
        </div>
      )}
      {isLoggedIn && (
        <div className={css.signWrapper}>
          <button
            type="button"
            onClick={() => dispatch(logoutUser())}
            className={css.loginButton}
          >
            <img
              src={logoutIcon}
              alt="Logout icon"
              className={css.logoutIcon}
            />
            <span className={css.loginText}>Log out</span>
          </button>
          <div className={css.buttonRegister}>{user?.name || 'User'}</div>
        </div>
      )}
      {isSignUpOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          {' '}
          <ModalWindow
            onCloseModal={handleSignUpClose}
            modalIsOpen={isSignUpOpen}
          >
            {' '}
            <SignUp modalClose={handleSignUpClose} />{' '}
          </ModalWindow>{' '}
        </Suspense>
      )}
      {isSignInOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          {' '}
          <ModalWindow
            onCloseModal={handleSignInClose}
            modalIsOpen={isSignInOpen}
          >
            {' '}
            <SignIn modalClose={handleSignInClose} />{' '}
          </ModalWindow>{' '}
        </Suspense>
      )}
    </div>
  );
};

export default AuthNav;
