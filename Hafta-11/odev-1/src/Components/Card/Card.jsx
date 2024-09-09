import React from 'react';
import "./Card.css";

const Card = ({ quantities, products }) => {
  // 0'dan büyük miktarları filtrele
  const filteredQuantities = quantities.filter(({ quantity }) => quantity > 0);

  // total fonksiyonu = toplam tutari hesapla
  const total = filteredQuantities.reduce((acc, { id, quantity }) => {
    const product = products.find(p => p.id === id);
    return acc + (product.price * quantity);
  }, 0);

  return (
    <div className='card'>
      <h1>Your Receipt</h1>
      <div className='cardCalc'>
        <div className='cardProduct'>
          <span>Product</span>
          <span>Amount</span>
          <span className='cardPrice'>Price</span>
        </div>
        <hr />
        {/* her bir ürün için bilgileri goster*/}
        {filteredQuantities.map(({ id, quantity }) => {
          const product = products.find(p => p.id === id);
          return (
            <div key={id} className='cardProduct'>
              <span>{product.title}</span>
              <span>{quantity}</span>
              <span className='cardPrice'>${(product.price * quantity).toLocaleString()}</span>
            </div>
          );
        })}
        <hr />
        <div className='cardTotal'>
          <span>TOTAL</span>
          <span className='cardPrice'>${total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;