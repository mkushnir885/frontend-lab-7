import React from 'react';
import './GoodsCard.css';
const GoodsCard = ({ image, name, price }) => {
  return (
    <div className="goods-card">
      <img src={image} alt={name} className="goods-card_image" />
      <h3 className="goods-card_name">{name}</h3>
      <p className="goods-card_price">${price}</p>
    </div>
  );
};

export default GoodsCard;
