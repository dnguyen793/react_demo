import React from 'react';
import './cell.css';

function Cell( props ) {
    const handleCellClick = () => {
        console.log('cell was clicked');
        var a = props.clickHandler( props.index );
        if (a === true){
            console.log( "parent said yes!")
        }
    }

    const { cellHeight: height, cellWidth: width } = props.dimension;
    const newStyle = { height, width };

    return (
        <div onClick={ handleCellClick } style={newStyle} className='cell'>Cell { props.text }</div>
    );
}

export default Cell;