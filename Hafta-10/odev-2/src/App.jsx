import { useState, useEffect } from "react";
import "./App.css";
import dice1 from "./assets/dice1.png";
import dice2 from "./assets/dice2.png";
import dice3 from "./assets/dice3.png";
import dice4 from "./assets/dice4.png";
import dice5 from "./assets/dice5.png";
import dice6 from "./assets/dice6.png";
import backgroundImage from "./assets/dice.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function App() {
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  const [player1Set, setPlayer1Set] = useState(false);
  const [player1Dice, setPlayer1Dice] = useState(0);
  const [player2Dice, setPlayer2Dice] = useState(0);
  const [result, setResult] = useState("");
  const [gameOn, setGameOn] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setGameOn(true);
    let rollDice = setInterval(() => {
      setPlayer1Dice(Math.floor(Math.random() * 6));
      setPlayer2Dice(Math.floor(Math.random() * 6));
    }, 100);

    setTimeout(() => {
      clearInterval(rollDice);
      const p1 = Math.floor(Math.random() * 6);
      const p2 = Math.floor(Math.random() * 6);

      setPlayer1Dice(p1);
      setPlayer2Dice(p2);

      if (p1 > p2) {
        setResult(`${player1} kazandı`);
      } else if (p1 < p2) {
        setResult(`${player2} kazandı`);
      } else {
        setResult("Berabere");
      }
      setGameOn(false);
    }, 3000);
  };

  return (
    <div className="App">
      {!showContent ? (
        <div className="background-image">
          <img src={backgroundImage} alt="Background" className="background-img" />
        </div>
      ) : (
        <div className={`content ${showContent ? 'show' : ''}`}>
          <h1>Zar Atalım</h1>
          <div className="players">
            <div className="player">
              <input
                type="text"
                value={player1}
                onChange={(e) => setPlayer1(e.target.value)}
                disabled={gameOn}
                onFocus={() => setPlayer1Set(true)}
                onBlur={() => setPlayer1Set(false)}
                className={player1Set ? "active" : ""}
              />
              <img
                src={diceImages[player1Dice]}
                alt="Player 1 Dice"
                className="dice-image"
              />
            </div>
            <div className="player">
              <input
                type="text"
                value={player2}
                onChange={(e) => setPlayer2(e.target.value)}
                disabled={gameOn}
              />
              <img
                src={diceImages[player2Dice]}
                alt="Player 2 Dice"
                className="dice-image"
              />
            </div>
          </div>
          <button onClick={handleClick} disabled={gameOn}>
            {gameOn ? "Zar Atıldı" : "Zar At"}
          </button>
          <h3>Sonuç: {result}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
