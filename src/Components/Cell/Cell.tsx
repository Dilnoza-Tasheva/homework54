import React from 'react';

const Cell = ({item, index, cellClick}) => {
    return (
        <div onClick={() => cellClick(index)}>
            {item.clicked && item.hasItem ? '$' : ''}
        </div>
    );
};

export default Cell;