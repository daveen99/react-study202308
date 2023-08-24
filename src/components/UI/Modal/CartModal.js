import React from 'react';
import styles from './CartModal.module.scss';

import Portal from '../Portal/Portal';

const Backdrop = ({onClose}) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const CartModal = ({children, onClose}) => {
  return (
    <>
      <Portal destId="backdrop-root">
        <Backdrop onClose={onClose} />
      </Portal>
      <Portal destId="overlay-root">
        <ModalOverlay>{children}</ModalOverlay>
      </Portal>
    </>
  );
};

export default CartModal;
