import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import React from 'react';

interface Props {
  children: React.ReactNode;
  onCloseModal: () => void;
  type: 'login' | 'registration';
  onChangeType: () => void;
}

export const Modal: React.FC<Props> = ({
  children,
  onCloseModal,
  type,
  onChangeType,
}) => {
  return createPortal(
    <div className="modal-container">
      <div className="modal">
        <button className="modal__close" onClick={onCloseModal}>
          <X className="icon" />
        </button>
        {children}

        <button className="modal__switch" onClick={onChangeType}>
          {type === 'login'
            ? 'Нет аккаунта? Зарегистрироваться'
            : 'Есть аккаунт? Войти'}
        </button>
      </div>
    </div>,
    document.body,
  );
};
