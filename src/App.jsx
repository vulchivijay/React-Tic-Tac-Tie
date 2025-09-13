import { useState } from 'react'
import Header from './components/Header.jsx'
import Players from './components/Players'
import GameBoard from './components/GameBoard.jsx'
import GameOver from './components/GameOver.jsx'
import Logs from './components/Logs.jsx'
import { DerivedActivePlayer } from './components/Helpers.jsx'
import { INITIAL_GAMEBOARD, WINNING_COMBINATIONS } from './static-data.jsx'
import './App.css'


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = DerivedActivePlayer(gameTurns);
  let gameBoard = [...INITIAL_GAMEBOARD.map(array => [...array])];
  let hasWinner = false;
  let hasDraw = false;
  
  for (const turn of gameTurns) {
    const {square, player} = turn;
    const {row, cel} = square;
    gameBoard[row][cel] = player;
  }

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thrirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thrirdSquareSymbol) {
      hasWinner = firstSquareSymbol
    }
  }

  hasDraw = gameTurns.length === 9 && !hasWinner;

  const handleActivePlayer = (rowIndex, cellIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = DerivedActivePlayer(prevTurns)
      const updateTurns = [
        { square:
          {
            row: rowIndex,
            cel: cellIndex
          },
          player: currentPlayer
        },
        ...prevTurns];
      return updateTurns;
    });
  }

  const handleRestartMatch = () => {
    setGameTurns([]);
  }

  return (
    <>
      <Header />
      <div id='game-container'>
        <Players activePlayer={activePlayer} />
        <GameOver restartGame={handleRestartMatch} hasDraw={hasDraw} winner={hasWinner} />
        <GameBoard onSelectSquareBy={handleActivePlayer} board={gameBoard} />
      </div>
      <Logs turns={gameTurns} />
    </>
  );
}

export default App
