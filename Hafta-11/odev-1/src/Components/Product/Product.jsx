import { useState, useEffect } from "react";
import "./Product.css";

const Product = ({ id, img, title, price, setQuantities, money }) => {

  const [quantity, setQuantity] = useState(0);

  // 0'dan buyuk sayi varsa inputta, sell butonuna basildiginda, quantity'yi 1 eksilt. 0'sa bir sey yapma.
  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // buy butonuna basildiginda, eger urunun fiyati toplam paradan azsa, quantity'yi
  const increase = () => {
    if (price <= money) {
      setQuantity(quantity + 1);
    }
  };

  // Math.max(0, ...) - negatif deger girildiginde input value'yu 0 alsin
  // Math.max(... || 0); - NaN(sayi olmayan) deger girildiginde input value'yu 0 alsin
  // parseInt(event.target.value) - o sirada girilen degeri, parseInt ile tamsayi olarak alsin.
  const handleChange = (event) => {
    const value = Math.max(0, parseInt(event.target.value) || 0);
    setQuantity(value);
  };


  // Card
  useEffect(() => {
    setQuantities(id, quantity);
  }, [quantity, id, setQuantities]);

  return (
    <div className="product">
      <img className='imgProduct' src={img} alt={title} />
      <p>{title}</p>
      <p className="priceP">${price}</p>
      <section className='btn'>
        <button 
          // miktar 0'sa, sell butonunu inaktif yap, degilse aktif olsun:
          className={quantity <= 0 ? "sellBtn" : "activeSell"} 
          onClick={decrease} 
          disabled={quantity <= 0}
        >
          Sell
        </button>
        <input 
          className='inputBtn' 
          type="text" 
          value={quantity} 
          onChange={handleChange} 
        />
        <button 
          // urun fiyati toplam paradan fazlaysa, buy butonunu inaktif yap:
          className={price > money ? 'inactiveBuy' : 'buyBtn'} 
          onClick={increase} 
          disabled={price > money}
        >
          Buy
        </button>
      </section>
    </div>
  );
};

export default Product;