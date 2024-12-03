import css from './AppBar.module.css';
import ukraine from '../../assets/ukraine.svg';
import { Link, NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav.jsx';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildActiveClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <header className={css.header}>
      <div className={css.mainWrapper}>
        <div>
          <Link to="/" className={css.logoContainer}>
            <img src={ukraine} alt="Flag of Ukraine" className={css.logo} />
            <span className={css.logoName}>learnLingo</span>
          </Link>
          <nav className={css.nav}>
            <NavLink to="/" className={buildActiveClass}>
              Home
            </NavLink>
            <NavLink to="/teachers" className={buildActiveClass}>
              Teachers
            </NavLink>
            {isLoggedIn && (
              <NavLink to="/favorites" className={buildActiveClass}>
                Favorites
              </NavLink>
            )}
          </nav>
        </div>
        <AuthNav />
      </div>
      <MobileMenu />
    </header>
  );
};

export default AppBar;
