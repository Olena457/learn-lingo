import { useEffect } from 'react';
import Modal from 'react-modal';
import Icon from '../Icon/Icon.jsx';
import css from './ModalWindow.module.css';

const ModalWindow = ({ modalIsOpen, onCloseModal, children }) => {
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add(css.modalOpen);
    } else {
      document.body.classList.remove(css.modalOpen);
    }

    return () => {
      document.body.classList.remove(css.modalOpen);
    };
  }, [modalIsOpen]);

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    return () => {
      if (modalRoot) {
        while (modalRoot.firstChild) {
          modalRoot.removeChild(modalRoot.firstChild);
        }
      }
    };
  }, []);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(17, 18, 19, 0.4)',
    },
  };

  <Modal
    isOpen={modalIsOpen}
    onRequestClose={onCloseModal}
    shouldCloseOnOverlayClick={true}
    shouldCloseOnEsc={true}
    className={css.modalWindow}
    ariaHideApp={false}
    style={customStyles}
    onAfterOpen={() => (document.body.style.overflow = 'hidden')}
    onAfterClose={() => (document.body.style.overflow = 'unset')}
  >
    <div className={css.modalContainer}>
      <button
        type="button"
        onClick={onCloseModal}
        className={css.buttonClose}
        aria-label="close modal button"
      >
        <Icon id="close" width="32" height="32" ariaHidden={false} />
      </button>
      {children}
    </div>
  </Modal>;
};

export default ModalWindow;
