import { useState } from "react";
import "./App.css";
import { Dice } from "./components/Dice";

function App() {
  const [dices, setDices] = useState(randomDice(10));
  const [gameState, setGameState] = useState({ counter: 0, won: false });

  function holdDice(index) {
    setDices((prevDices) => {
      const newDices = [...prevDices];
      newDices[index].held = !newDices[index].held;
      console.log(newDices[index]);
      return newDices;
    });

    // check if all dice are the same
    let allSame = true;
    for (let i = 0; i < dices.length; i++) {
      if (dices[i].value !== dices[0].value) {
        allSame = false;
        break;
      }
    }
    if (allSame) {
      setGameState({ ...gameState, won: true });
    }
  }

  function randomDice(n) {
    return [...Array(n).keys()].map((d, i) => ({
      key: i,
      value: Math.floor(Math.random() * 6) + 1,
      held: false,
    }));
  }

  function rollDice() {
    setDices((oldDices) => {
      return oldDices.map((d) => ({
        ...d,
        value: d.held ? d.value : Math.floor(Math.random() * 6) + 1,
      }));
    });
    setGameState((prevState) => ({
      ...prevState,
      counter: prevState.counter + 1,
    }));

    if (gameState.won) {
      setDices(randomDice(10));
      setGameState({ counter: 0, won: false });
    }
  }

  return (
    <div className="App container-fluid">
      <h1>Tenzies</h1>
      <h3>{gameState.counter}</h3>
      <p className="game-description">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      {gameState.won && <h1>Winner</h1>}
      <div className="dice-container">
        {dices.map((dice, i) => (
          <Dice
            key={i}
            value={dice.value}
            held={dice.held}
            handler={() => holdDice(i)}
          />
        ))}
      </div>
      <hr />
      <div className="button-container">
        <button className="btn btn-success roll-button" onClick={rollDice}>
          {gameState.won ? "New Game" : "Roll"}
        </button>
      </div>
    </div>
  );
}

export default App;
