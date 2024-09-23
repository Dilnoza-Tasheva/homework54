import './App.css'
import CreateTable from "./Components/CreateTable.tsx";
import {useState} from "react";
import Board from "./Components/Board/Board.tsx";

const App = () => {

    const [items, setItems] = useState(CreateTable());
    const [attempts, setAttempts] = useState(0);

    const cellClick = (index: number) => {
      if (items[index].clicked) return;

      const newItems = [...items];
      newItems[index] = {...newItems[index],clicked: true};

      setItems(newItems);
      setAttempts(attempts + 1);
    };

    const resetGame = () => {
        setItems(CreateTable());
        setAttempts(0);
    };

    return (
        <div>
            <h2>Find the hidden treasure</h2>
            <Board items={items} cellClick={cellClick}/>
            <div>
                <p>Attempts: {attempts}</p>
                <p>You found the treasure in {attempts} attempts</p>
                <button type="button" onClick={resetGame}>Reset the Game</button>
            </div>
        </div>
    );
};

export default App;
