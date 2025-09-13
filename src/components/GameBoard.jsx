

export default function GameBoard({ onSelectSquareBy, board }) {
  // const [gameBoard, setGameBoard] = useState(initialBoard);
  // const handleSquere = (row, col) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map((r) => [...r])];
  //     updatedBoard[row][col] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquareBy();
  // }

  return (
    <div id='game-board'>
      { board.map((row, rowIndex) => (
          <ol key={rowIndex}>
            { row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}><button onClick={() => onSelectSquareBy(rowIndex, cellIndex)} disabled={playerSymbol !== 'null'}>{playerSymbol === 'null' ? '' : playerSymbol}</button></li>
            ))}
          </ol> ))}
    </div>
  );
}