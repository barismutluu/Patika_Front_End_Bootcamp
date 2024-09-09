import './App.css';
import { useState, useEffect, useRef } from 'react';
import Product from './Components/Product/Product';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';

function App() {
  const products = [
    {
        id: 1,
        img: "https://neal.fun/spend/images/big-mac.jpg",
        title:"Big Mac",
        price: 2,
    },
    {
        id: 2,
        img: "https://neal.fun/spend/images/flip-flops.jpg",
        title:"Flip Flops",
        price: 3,
    },
    {
        id: 3,
        img: "https://neal.fun/spend/images/coca-cola-pack.jpg",
        title:"Coca-Cola Pack",
        price: 5,
    },
    {
        id: 4,
        img: "https://neal.fun/spend/images/movie-ticket.jpg",
        title:"Movie Ticket",
        price: 12,
    },
    {
        id: 5,
        img: "https://neal.fun/spend/images/book.jpg",
        title:"Book",
        price: 15,
    },
    {
        id: 6,
        img: "https://neal.fun/spend/images/lobster-dinner.jpg",
        title:"Lobster Dinner",
        price: 45,
    },
    {
        id: 7,
        img: "https://neal.fun/spend/images/video-game.jpg",
        title:"Video Game",
        price: 60,
    },
    {
        id: 8,
        img: "https://neal.fun/spend/images/amazon-echo.jpg",
        title:"Amazon Echo",
        price: 99,
    },
    {
        id: 9,
        img: "https://neal.fun/spend/images/year-of-netflix.jpg",
        title:"Year of Netflix",
        price: 100,
    },
    {
        id: 10,
        img: "https://neal.fun/spend/images/air-jordans.jpg",
        title:"Air Jordans",
        price: 125,
    },
    {
        id: 11,
        img: "https://neal.fun/spend/images/airpods.jpg",
        title:"Airpods",
        price: 199,
    },
    {
        id: 12,
        img: "https://neal.fun/spend/images/gaming-console.jpg",
        title:"Gaming Console",
        price: 299,
    },
    {
        id: 13,
        img: "https://neal.fun/spend/images/drone.jpg",
        title:"Drone",
        price: 350,
    },
    {
        id: 14,
        img: "https://neal.fun/spend/images/smartphone.jpg",
        title:"Smartphone",
        price: 699,
    },
    {
        id: 15,
        img: "https://neal.fun/spend/images/bike.jpg",
        title:"Bike",
        price: 800,
    },
    {
        id: 16,
        img: "https://neal.fun/spend/images/kitten.jpg",
        title:"Kitten",
        price: 1500,
    },
    {
        id: 17,
        img: "https://neal.fun/spend/images/puppy.jpg",
        title:"Puppy",
        price: 1500,
    },
    {
        id: 18,
        img: "https://neal.fun/spend/images/auto-rickshaw.jpg",
        title:"Auto Rickshaw",
        price: 2300,
    },
    {
        id: 19,
        img: "https://neal.fun/spend/images/horse.jpg",
        title:"Horse",
        price: 2500,
    },
    {
        id: 20,
        img: "https://neal.fun/spend/images/acre-of-farmland.jpg",
        title:"Acre of Farmland",
        price: 3000,
    },
    {
        id: 21,
        img: "https://neal.fun/spend/images/designer-handbag.jpg",
        title:"Designer Handbag",
        price: 5500,
    },
    {
        id: 22,
        img: "https://neal.fun/spend/images/hot-tub.jpg",
        title:"Hot Tub",
        price: 6000,
    },
    {
        id: 23,
        img: "https://neal.fun/spend/images/luxury-wine.jpg",
        title:"Luxury Wine",
        price: 7000,
    },
    {
        id: 24,
        img: "https://neal.fun/spend/images/diamond-ring.jpg",
        title:"Diamond Ring",
        price: 10000,
    },
    {
        id: 25,
        img: "https://neal.fun/spend/images/jet-ski.jpg",
        title:"Jet Ski",
        price: 12000,
    },
    {
        id: 26,
        img: "https://neal.fun/spend/images/rolex.jpg",
        title:"Rolex",
        price: 15000,
    },
    {
        id: 27,
        img: "https://neal.fun/spend/images/ford-f-150.jpg",
        title:"Ford F-150",
        price: 30000,
    },
    {
        id: 28,
        img: "https://neal.fun/spend/images/tesla.jpg",
        title:"Tesla",
        price: 75000,
    },
    {
        id: 29,
        img: "https://neal.fun/spend/images/monster-truck.jpg",
        title:"Monster Truck",
        price: 150000,
    },
    {
        id: 30,
        img: "https://neal.fun/spend/images/ferrari.jpg",
        title:"Ferrari",
        price: 250000,
    },
    {
        id: 31,
        img: "https://neal.fun/spend/images/single-family-home.jpg",
        title:"Single Family Home",
        price: 300000,
    },
    {
        id: 32,
        img: "https://neal.fun/spend/images/gold-bar.jpg",
        title:"Gold Bar",
        price: 700000,
    },
    {
        id: 33,
        img: "https://neal.fun/spend/images/mcdonalds-franchise.jpg",
        title:"McDonalds Franchise",
        price: 1500000,
    },
    {
        id: 34,
        img: "https://neal.fun/spend/images/superbowl-ad.jpg",
        title:"Superbowl Ad",
        price: 5250000,
    },
    {
        id: 35,
        img: "https://neal.fun/spend/images/yacht.jpg",
        title:"Yacht",
        price: 7500000,
    },
    {
        id: 36,
        img: "https://neal.fun/spend/images/m1-abrams.jpg",
        title:"M1 Abrams",
        price: 8000000,
    },
    {
        id: 37,
        img: "https://neal.fun/spend/images/formula-1-car.jpg",
        title:"Formula 1 Car",
        price: 15000000,
    },
    {
        id: 38,
        img: "https://neal.fun/spend/images/apache-helicopter.jpg",
        title:"Apache Helicopter",
        price: 31000000,
    },
    {
        id: 39,
        img: "https://neal.fun/spend/images/mansion.jpg",
        title:"Mansion",
        price: 45000000,
    },
    {
        id: 40,
        img: "https://neal.fun/spend/images/make-a-movie.jpg",
        title:"Make a Movie",
        price: 100000000,
    },
    {
        id: 41,
        img: "https://neal.fun/spend/images/boeing-747.jpg",
        title:"Boeing 747",
        price: 148000000,
    },
    {
        id: 42,
        img: "https://neal.fun/spend/images/mona-lisa.jpg",
        title:"Mona Lisa",
        price: 780000000,
    },
    {
        id: 43,
        img: "https://neal.fun/spend/images/skyscraper.jpg",
        title:"Skyscraper",
        price: 850000000,
    },
    {
        id: 44,
        img: "https://neal.fun/spend/images/cruise-ship.jpg",
        title:"Cruise Ship",
        price: 930000000,
    },
    {
        id: 45,
        img: "https://neal.fun/spend/images/nba-team.jpg",
        title:"NBA Team",
        price: 2120000000,
    },
  ]

  const defaultMoney = 1000000000;

  const [money, setMoney] = useState(defaultMoney);
  const [targetMoney, setTargetMoney] = useState(defaultMoney);
  const [quantities, setQuantities] = useState([]);
  const intervalRef = useRef(null);

  // Animasyon
  useEffect(() => {
    if (money !== targetMoney) {
      const isIncreasing = money < targetMoney;
      intervalRef.current = setInterval(() => {
        setMoney(prevMoney => {
          const difference = Math.abs(prevMoney - targetMoney);
          const step = Math.max(difference * 0.01, 1); // Minimum 1 birim

          if (isIncreasing) {
            if (prevMoney < targetMoney) {
              const newMoney = Math.min(prevMoney + step, targetMoney);
              if (newMoney === targetMoney) clearInterval(intervalRef.current);
              return newMoney;
            } else {
              clearInterval(intervalRef.current);
              return targetMoney;
            }
          } else {
            if (prevMoney > targetMoney) {
              const newMoney = Math.max(prevMoney - step, targetMoney);
              if (newMoney === targetMoney) clearInterval(intervalRef.current);
              return newMoney;
            } else {
              clearInterval(intervalRef.current);
              return targetMoney;
            }
          }
        });
      }, 10);
    }

    return () => clearInterval(intervalRef.current); // Temizlik
  }, [targetMoney, money]);

  const handleSetQuantities = (id, quantity) => {
    const updatedQuantities = quantities.filter(q => q.id !== id);
    updatedQuantities.push({ id, quantity });
    setQuantities(updatedQuantities);

    const total = updatedQuantities.reduce((acc, q) => {
      const product = products.find(p => p.id === q.id);
      return acc + product.price * q.quantity;
    }, 0);

    setTargetMoney(defaultMoney - total);
  };

  return (
    <div className="container">
      {/* HEADER START */}
      <Header />

      {/* TOTAL MONEY START */}
      <div className="total">
        <h1 className="h1TotalMoney">$ {money.toLocaleString()} </h1>
        <div className="gradient"></div>
      </div>

      {/* PRODUCTS START */}
      <div className="products">
        {products.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            setQuantities={handleSetQuantities}
            money={money}
          />
        ))}
      </div>

      {/* CARD START */}
      <Card quantities={quantities} products={products} />
    </div>
  );
}

export default App;

