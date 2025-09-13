import { useState } from 'react';

export default function Player({player, symbol, isActive}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(player);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
  }

  const handlePlayer = (e) => {
    setPlayerName(e.target.value);
  }

  let playerEle = <span className='player-name'>{playerName}</span>;

  if (isEditing) {
    playerEle = <input type='text' defaultValue={playerName} required onChange={handlePlayer} />;
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <div className='player'>
        <span>
          {playerEle}
          <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      </div>
    </li>
  );
}