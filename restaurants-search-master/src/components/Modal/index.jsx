import React, { useEffect } from 'react';

import Portal from './Portal';

import { Ovelay, Dialog } from './styles';

const Modal = ({ children, open, onClose }) =>  {
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27) onClose();
    }

    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  if (!open) return null;

  function onOvelayClick() {
    onClose();
  };

  function onDialogClick(e) {
    e.stopPropagation();
  };

  return (
    <Portal>
      <Ovelay onClick={onOvelayClick} onClose={onClose}>
        <Dialog onClick={onDialogClick} > { children } </Dialog>
      </Ovelay>
    </Portal>
  );
};

export default Modal;
