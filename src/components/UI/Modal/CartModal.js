import React from 'react';
import styles from './CartModal.module.scss';
import Portal from '../Portal/Portal.js';

const Backdrop = () => {
  return <div className={styles.Backdrop} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const CartModal = ({children}) => {
  return (
    <>
      <Portal destId="backdrop-root">
        <Backdrop />
      </Portal>

      <Portal destId="overlay-root">
        <ModalOverlay>{children}</ModalOverlay>
      </Portal>
    </>
  );
};

export default CartModal;
