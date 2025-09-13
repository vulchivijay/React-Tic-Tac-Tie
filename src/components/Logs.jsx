export default function Logs({turns}) {
  return (
    <ol id='log'>
      {turns.map((turn, index) => <li key={index} >{turn.player} selected {turn.square.row}, {turn.square.cell}.</li>)}
    </ol>
  )
};