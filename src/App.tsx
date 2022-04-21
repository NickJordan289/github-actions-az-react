import { useState } from "react";
import "./App.css";
import { Dice } from "./components/Dice";
import { IDice } from "./IDice";

interface IGameState {
  counter: number;
  won: boolean;
}

function App() {
  const [dices, setDices] = useState<Array<IDice>>(
    randomDice(10) as Array<IDice>
  );
  const [gameState, setGameState] = useState<IGameState>({
    counter: 0,
    won: false,
  } as IGameState);

  function holdDice(index: number) {
    setDices((prevDices) => {
      const newDices = [...prevDices];
      newDices[index].held = !newDices[index].held;
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

  function randomDice(n: number) {
    const dices = Array<IDice>();
    for (let i = 0; i < n; i++) {
      dices.push({
        value: Math.floor(Math.random() * 6) + 1,
        held: false,
      } as IDice);
    }
    return dices;
  }

  function rollDice() {
    setDices((oldDices) => {
      return oldDices.map(
        (d) =>
          ({
            ...d,
            value: d.held ? d.value : Math.floor(Math.random() * 6) + 1,
          } as IDice)
      );
    });
    setGameState(
      (prevState) =>
        ({
          ...prevState,
          counter: prevState.counter + 1,
        } as IGameState)
    );

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
