import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="container">
        <h1 className="not-found__title">Такой страницы не существует.</h1>
        <Link to="/">
          <button className="primary-button">На главную</button>
        </Link>
      </div>
    </div>
  );
};
