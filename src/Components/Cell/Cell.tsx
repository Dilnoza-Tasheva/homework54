import React from 'react';

const Cell = ({item, index}) => {
    return (
        <div>
            {item.clicked && item.hasItem ? '$' : ''}
        </div>
    );
};

export default Cell;