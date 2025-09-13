export default function GameOver ({restartGame, hasDraw, winner}) {
  return (
    <>
      {(winner || hasDraw) ? (<div id='game-over'>
        <h2>Game Over!</h2>
        {winner && <p>{winner} Won!</p> }
        {!winner && <p>It's a Draw!</p> }
        <button onClick={restartGame}>Rematch!</button>  
      </div>) : '' }
    </>
  );
}