import React, {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from './componets/Board/BoardComponent';
import {Board} from './models/Board';
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import LostFigure from "./componets/LostFigure/LostFigure";
import Header from "./componets/Header/Header";

function App() {
  const [board, setBoard] = useState(new Board);
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player>(whitePlayer);

  useEffect(() => {
      handleRestart();
  }, [])

  function handleRestart() {
      restart();
      setCurrentPlayer(whitePlayer);
  }

  function restart(){
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
      setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }
  return (
    <div className='app'>
      <Header
      move={currentPlayer.color}
      restart={handleRestart}
      />
      <LostFigure
          figures={board.lostBlackFigures}/>
      <BoardComponent
      board={board}
      setBoard={setBoard}
      currentPlayer={currentPlayer}
      swapPlayer={swapPlayer}
      />
        <LostFigure
            figures={board.lostWhiteFigures}/>
        </div>
  );
}

export default App;
