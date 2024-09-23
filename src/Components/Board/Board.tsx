import React from 'react';
import Cell from "../Cell/Cell.tsx";
import './Board.css';

export interface Item {
    clicked: boolean;
    hasItem: boolean;
}

interface Props {
    cellClick: (index: number) => void;
    items: Item[];
}

const Board: React.FC<Props> = ({items, cellClick}) => {
    return (
        <div className="board">
            {items.map((item, index) => (
                <Cell key={index} index={index} item={item} cellClick={cellClick} />
            ))}
        </div>
    );
};

export default Board;