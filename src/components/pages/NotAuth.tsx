import React from 'react';
import { Link } from 'react-router-dom';

export const NotAuth: React.FC = () => {
  return (
    <div className="not-auth">
      <div className="container">
        <h1 className="not-auth__title">
          Войдите в аккаунт или перейдите на главную страницу!
        </h1>
        <Link to="/">
          <button className="primary-button">На главную</button>
        </Link>
      </div>
    </div>
  );
};
