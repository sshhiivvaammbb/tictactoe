import React ,{useState} from "react";
import Board from './components/Board';

import "./styles/root.scss";
import {calculateWinner} from './winnercal'


const App = () => {

  const [board , setBoard] = useState(Array(9).fill(null));
  const [isXNext , setisXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner 
  ? `winner is ${winner}` 
  : `next player is ${isXNext ? 'x' : 'o'}`;

  const handleSquareClick = position=> {
    if(board[position] || winner){
      return;
    }
      
     setBoard (prev => {

      return prev.map((square,pos) => {
        if (pos === position) {
          return isXNext ? "x" : 'o';
        }
        return square;
      });
     });   
     setisXNext (( prev ) => !prev)

  };

  return (

    <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{ message }</h2>
    <Board board={board} handleSquareClick={handleSquareClick}/>
    
    <button className="btn" type="button"> Start New Game
    </button>
  </div>
  );
};

export default App;
  

