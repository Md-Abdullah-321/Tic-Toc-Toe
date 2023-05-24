import React from 'react';
import Square from './square';

function Board(props){
    const renderSqure = (i) => <Square
        value = {props.squares[i]}
        onClick = {() => props.onClick(i)}
    />
    return (
        <div>
            <div className='board-row'>
                {renderSqure(0)}
                {renderSqure(1)}
                {renderSqure(2)}
            </div>
            
            <div className='board-row'>
                {renderSqure(3)}
                {renderSqure(4)}
                {renderSqure(5)}
            </div>
            
            <div className='board-row'>
                {renderSqure(6)}
                {renderSqure(7)}
                {renderSqure(8)}
            </div>
        </div>
    )
}

export default Board;