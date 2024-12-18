import css from './ModalWindow.module.css';
import { useEffect } from 'react';
import Modal from 'react-modal';
import Icon from '../Icon/Icon.jsx';

const ModalWindow = ({ modalIsOpen, onCloseModal, children }) => {
  useEffect(() => {
    document.body.classList.add(css.modalOpen);

    return () => {
      document.body.classList.remove(css.modalOpen);
    };
  }, []);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modalWindow}
      style={{
        overlay: {
          backgroundColor: 'rgba(17, 18, 19, 0.4)',
        },
      }}
    >
      <div className={css.modalContainer}>
        <button
          type="button"
          onClick={onCloseModal}
          className={css.buttonClose}
        >
          <Icon id="close" width="32" height="32" />
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWindow;
