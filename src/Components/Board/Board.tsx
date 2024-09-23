import React from 'react';
import Cell from "../Cell/Cell.tsx";

const Board = (items) => {
    return (
        <div>
            {items.map((item, index) => (
                <Cell key={index} index={index} item={item} />
            ))}
        </div>
    );
};

export default Board;