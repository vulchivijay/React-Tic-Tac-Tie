export default function GameBoard({ onSelectSquareBy, board }) {
  return (
    <div id='game-board'>
      { board.map((row, rowIndex) => (
          <ol key={rowIndex}>
            { row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button
                  onClick={() => onSelectSquareBy(rowIndex, cellIndex)}
                  disabled={playerSymbol !== null}>
                    {playerSymbol === null ? '' : playerSymbol}
                </button>
              </li>
            ))}
          </ol> ))}
    </div>
  );
}