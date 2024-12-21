import { useEffect } from 'react';
import css from './MobileNav.module.css';
import Modal from 'react-modal';
import clsx from 'clsx';
import Icon from '../Icon/Icon.jsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import { NavLink } from 'react-router-dom';

const MobileNav = ({ isOpen, closeModal }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    document.body.classList.add(css.modalOpen);

    return () => {
      document.body.classList.remove(css.modalOpen);
    };
  }, []);

  const buildActiveClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={css.modal}
        overlayClassName={css.overlay}
        contentLabel="Mobile Menu"
        ariaHideApp={false}
      >
        <button className={css.closeBtn} onClick={closeModal}>
          <Icon id="close" width="32" height="32" ariaHidden={false} />
        </button>

        <nav className={css.burgerNav}>
          <ul className={css.list}>
            <li className={css.item}>
              <NavLink to="/" className={buildActiveClass} onClick={closeModal}>
                Home
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink
                to="/teachers"
                className={buildActiveClass}
                onClick={closeModal}
              >
                Teachers
              </NavLink>
            </li>
            {isLoggedIn && (
              <li className={css.item}>
                <NavLink
                  to="/favorites"
                  className={buildActiveClass}
                  onClick={closeModal}
                >
                  Favorites
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </Modal>
    </>
  );
};

export default MobileNav;
// variant 2
// import css from './MobileNav.module.css';
// import clsx from 'clsx';
// import Icon from '../Icon/Icon.jsx';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
// import { NavLink } from 'react-router-dom';
// import ModalWindow from '../ModalWindow/ModalWindow.jsx';

// const MobileNav = ({ isOpen, closeModal }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   const buildActiveClass = ({ isActive }) => {
//     return clsx(css.link, isActive && css.active);
//   };

//   return (
//     <ModalWindow
//       modalIsOpen={isOpen}
//       onCloseModal={closeModal}
//       className={css.modal}
//       contentLabel="Mobile Menu"
//       ariaHideApp={false}
//     >
//       <button className={css.closeBtn} onClick={closeModal}>
//         <Icon id="close" width="32" height="32" ariaHidden={false} />{' '}
//       </button>

//       <nav className={css.burgerNav}>
//         <ul className={css.list}>
//           <li className={css.item}>
//             <NavLink to="/" className={buildActiveClass} onClick={closeModal}>
//               Home
//             </NavLink>
//           </li>
//           <li className={css.item}>
//             <NavLink
//               to="/teachers"
//               className={buildActiveClass}
//               onClick={closeModal}
//             >
//               Teachers
//             </NavLink>
//           </li>
//           {isLoggedIn && (
//             <li className={css.item}>
//               <NavLink
//                 to="/favorites"
//                 className={buildActiveClass}
//                 onClick={closeModal}
//               >
//                 Favorites
//               </NavLink>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </ModalWindow>
//   );
// };

// export default MobileNav;
