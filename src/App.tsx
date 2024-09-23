import './App.css'
import CreateTable from "./Components/CreateTable.tsx";
import {useState} from "react";
import Cell from "./Components/Cell/Cell.tsx";
import Board from "./Components/Board/Board.tsx";

const App = () => {

    const [items, setItems] = useState(CreateTable());
    const [attempts, setAttempts] = useState(0);

    const cellClick = (index) => {
      if (items[index].clicked) return;

      const newItems = [...items];
      newItems[index] = {...newItems[index],clicked: true};

      setItems(newItems);
      setAttempts(attempts + 1);
    };

    return (
        <div>
            <h2>Find the hidden treasure</h2>
            <Board items={items} cellClick={cellClick}/>
            <div>
                <p>Attempts: (attempts)</p>
                <p>You found the treasure in {attempts} attempts</p>
                <button type="button">Reset the Game</button>
            </div>
        </div>
    )

};

export default App
