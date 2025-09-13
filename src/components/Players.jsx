import Player from "./Player";

export default function Players({activePlayer}) {
  return (
    <ol id='players' className='highlight-player'>
      <Player player='Player 1' symbol='X' isActive={activePlayer === 'X'} />
      <Player player='Player 2' symbol='0' isActive={activePlayer === '0'} />
    </ol>
  );
}