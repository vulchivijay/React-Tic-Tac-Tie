import './App.css'
import { useState } from 'react';
import Header from './components/Header';
import Player from "./components/Player";
import GameBoard from './components/GameBoard';
import Logs from './components/Logs';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

const initialBoard = [
  ['null', 'null', 'null'],
  ['null', 'null', 'null'],
  ['null', 'null', 'null']
];

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = '0';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);

  let gameBoard = [...initialBoard.map(array => [...array])];

  let winner;
  
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
      winner = firstSquareSymbol
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleActivePlayer = (rowIndex, cellIndex) => {
    // setActivePlayer((currentPlayer) => currentPlayer === 'X' ? '0' : 'X');
    setGameTurns((prevTurns) => {
      const currentPlayer = derivedActivePlayer(prevTurns)
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
        <ol id='players' className='highlight-player'>
          <Player player='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player player='Player 2' symbol='0' isActive={activePlayer === '0'} />
        </ol>
        {winner || hasDraw && <GameOver restartGame={handleRestartMatch} winner={winner} />}
        <GameBoard onSelectSquareBy={handleActivePlayer} board={gameBoard} />
      </div>
      <Logs turns={gameTurns} />
    </>
  );
}

export default App
