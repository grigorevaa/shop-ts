import { ShoppingCart, User } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import { Login, Registration } from '../forms';
import { LoadingButton } from '../shared';
import { Modal } from './Modal';

export const ProfileAndCart: React.FC = () => {
  const { user, status: userStatus } = useAppSelector((state) => state.auth);
  const { totalPrice, status: cartStatus } = useAppSelector(
    (state) => state.cart,
  );

  const [showModal, setShowModal] = React.useState(!true);
  const [type, setType] = useState<'login' | 'registration'>('login');

  const onCloseModal = () => {
    setShowModal(!showModal);
  };

  const onChangeType = () => {
    setType(type === 'login' ? 'registration' : 'login');
  };

  return (
    <div className="profile-and-cart">
      {user &&
        (cartStatus === 'loading' || userStatus === 'loading' ? (
          <LoadingButton />
        ) : (
          <Link to="/cart" className="profile-and-cart__link">
            <button className="primary-button">
              <div className="icon">
                <ShoppingCart size={20} />
              </div>
              {totalPrice === 0 ? 'Корзина' : `${totalPrice} ₽`}
            </button>
          </Link>
        ))}

      {userStatus === 'loading' ? (
        <LoadingButton />
      ) : user ? (
        <Link to="/profile" className="profile-and-cart__link">
          <button className="primary-button">
            <div className="icon">
              <User size={20} />
            </div>
            {user.user_metadata.firstName}
          </button>
        </Link>
      ) : (
        <button
          className="secondary-button"
          onClick={() => setShowModal(!showModal)}
        >
          <div className="icon">
            <User size={18} />
          </div>
          Войти
        </button>
      )}

      {showModal && (
        <Modal
          onCloseModal={onCloseModal}
          type={type}
          onChangeType={onChangeType}
        >
          {type === 'login' ? (
            <Login onCloseModal={onCloseModal} />
          ) : (
            <Registration
              onCloseModal={onCloseModal}
              onChangeType={onChangeType}
            />
          )}
        </Modal>
      )}
    </div>
  );
};
