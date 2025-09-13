import Logo from './../../public/game-logo.png';

export default function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Game Logo" />
      <h1>Tic Tac Tie</h1>
    </header>
  );
}