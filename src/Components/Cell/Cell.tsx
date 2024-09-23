import React from 'react';
import {Item} from "../Board/Board.tsx";
import './Cell.css';

interface Props {
  item: Item;
  index: number;
  cellClick: (index: number) => void;
}

const Cell: React.FC<Props> = ({item, index, cellClick}) => {
    return (
        <div onClick={() => cellClick(index)}
        className={`cell ${item.clicked ? 'opened' : ''}`}>
            {item.clicked && item.hasItem ? '$' : ''}
        </div>
    );
};

export default Cell;