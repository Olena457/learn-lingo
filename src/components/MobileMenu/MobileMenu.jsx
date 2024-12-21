import { useState } from 'react';
import Icon from '../Icon/Icon.jsx';
import css from './MobileMenu.module.css';
import AuthNav from '../AuthNav/AuthNav.jsx';

import MobileNav from '../MobileNav/MobileNav.jsx';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className={css.mobileWrapper}>
      <div className={css.wrapper}>
        <button type="button" onClick={openModal} className={css.burgerBtn}>
          <Icon
            id="burger"
            width="32"
            height="32"
            className={css.icon}
            fillColor="#121417"
            ariaHidden={false}
          />
        </button>
        <AuthNav />
      </div>
      <div className={css.themeWrapper}>
        {' '}
        <ThemeSwitcher />{' '}
      </div>
      {isOpen && <MobileNav isOpen={isOpen} closeModal={closeModal} />}
    </div>
  );
};

export default MobileMenu;
