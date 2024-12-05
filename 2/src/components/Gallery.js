import React from 'react';
import GoodsCard from './GoodsCard';
import './Gallery.css';

const products = [
  {
    id: 1,
    image: 'images/image_1.jpg',
    name: 'Multifunction device i-SENSYS MF3010 Canon',
    price: 297.99,
  },
  {
    id: 2,
    image: 'images/image_2.jpg',
    name: 'Acer X1128H projector',
    price: 362.99,
  },
  {
    id: 3,
    image: 'images/image_3.jpg',
    name: 'TV Samsung UE32T4500A',
    price: 219.99,
  },
  {
    id: 4,
    image: 'images/image_4.jpg',
    name: 'Beko BDFS26020XQ dishwasher',
    price: 364.49,
  },
  {
    id: 5,
    image: 'images/image_5.jpg',
    name: 'Apple MacBook Air M1 Space Gray laptop',
    price: 845.29,
  },
  {
    id: 6,
    image: 'images/image_6.jpg',
    name: 'Samsung Galaxy A15 LTE 8/256Gb Black',
    price: 210.99,
  },
  {
    id: 7,
    image: 'images/image_7.jpg',
    name: 'Tablet Xiaomi Redmi Pad SE 4/128GB Graphite Gray',
    price: 169.99,
  },
  {
    id: 8,
    image: 'images/image_8.jpg',
    name: 'Vacuum cleaner Bosch BGS05A220',
    price: 82.49,
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {products.map((product) => (
        <GoodsCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Gallery;
