export default function GameOver ({restartGame, winner}) {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p>{winner} Won!</p> }
      {!winner && <p>It's a Draw!</p> }
      <button onClick={restartGame}>Rematch!</button>
    </div>
  );
}