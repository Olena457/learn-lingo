import { useState } from 'react';
import css from './AuthNav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import logoutIcon from '../../icons/logout.svg';
import {
  selectIsLoggedIn,
  selectUser,
} from '../../redux/auth/selectorsAuth.js';
import { logoutUser } from '../../redux/auth/operationsAuth.js';

import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import SignIn from '../SignIn/SignIn.jsx';
const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(null);

  const handleModalOpen = modalType => {
    setIsModalOpen(modalType);
  };

  const handleModalClose = () => {
    setIsModalOpen(null);
  };

  return (
    <div className={css.container}>
      {!isLoggedIn && (
        <div className={css.unsignWrapper}>
          <button
            type="button"
            onClick={() => handleModalOpen('signIn')}
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
            onClick={() => handleModalOpen('signUp')}
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
      {isModalOpen === 'signUp' && (
        <ModalWindow
          onCloseModal={handleModalClose}
          modalIsOpen={isModalOpen === 'signUp'}
        >
          <SignUp modalClose={handleModalClose} />
        </ModalWindow>
      )}
      {isModalOpen === 'signIn' && (
        <ModalWindow
          onCloseModal={handleModalClose}
          modalIsOpen={isModalOpen === 'signIn'}
        >
          <SignIn modalClose={handleModalClose} />
        </ModalWindow>
      )}
    </div>
  );
};

export default AuthNav;
