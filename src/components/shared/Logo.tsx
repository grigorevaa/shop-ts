import React from 'react';
import logoSvg from '../../assets/img/logo-2.svg';

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img
        className="logo__img"
        src={logoSvg}
        alt="logo"
        height={48}
        width={48}
      />
      <div>
        <h1 className="logo__title">Sweets Shop</h1>
        <span className="logo__subtitle">Лучшие вкусности мира!</span>
      </div>
    </div>
  );
};
