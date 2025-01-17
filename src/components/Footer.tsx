import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul className="footer__list">
          <li className="footer__list-title">О Магазине</li>
          <li className="footer__list-item">Отзывы</li>
          <li className="footer__list-item">Видео-обзоры</li>
          <li className="footer__list-item">Вопросы / ответы</li>
        </ul>

        <ul className="footer__list">
          <li className="footer__list-title">Для покупателей</li>
          <li className="footer__list-item">Как заказать</li>
          <li className="footer__list-item">Оплата</li>
          <li className="footer__list-item">Доставка</li>
        </ul>

        <ul className="footer__list">
          <li className="footer__list-title">Наши социальные сети</li>
          <li className="footer__list-item">Вконтакте</li>
          <li className="footer__list-item">Телеграм</li>
        </ul>
      </div>
    </div>
  );
};
