// import { useState } from 'react';

const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelectSquare }){
    // const [gameBoard, setGameBoard] = useState(initalGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) =>{
    //         const uptadedBoard = [...prevGameBoard.map(innerArray => [...innerArray])] 
    //         uptadedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return uptadedBoard;    
    //     })

    //     onSelectSquare();
    // }

    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={onSelectSquare}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}