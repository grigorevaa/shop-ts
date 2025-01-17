import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../redux/auth/asyncActions';
import { getCart } from '../redux/cart/asyncActions';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { Logo } from './Logo';
import { ProfileAndCart } from './ProfileAndCart';
import { Search } from './Search';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await dispatch(getUser()).unwrap();
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (user) await dispatch(getCart(user.id)).unwrap();
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      fetchCart();
    }
  }, [user]);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>
        <Search />
        <ProfileAndCart />
      </div>
    </div>
  );
};
