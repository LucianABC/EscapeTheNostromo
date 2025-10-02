
// results: win, lose, exited
export enum GameStatuses {
  WIN = 'win',
  LOSE = 'lose',
  EXITED = 'exited'
}
interface Props {
  gameStatus?: GameStatuses;
}
const GameEnded: React.FC<Props> = ({ gameStatus = 'exited' }) => {
  const looseText = <>
    <p className="line-1">Fallo en contener la amenaza.</p>
    <p className="line-2">Carga comprometida.</p>
    <p className="line-3">Iniciando protocolo de autodestrucción.</p>
  </>

  const winText = <>
    <p className="line-1">Has salvado la carga y a la tripulación.</p>
    <p className="line-2">Eres un héroe.</p>
  </>;

  const exitedText = <>
    <p className="line-1">Has decidido abandonar la misión.</p>
  </>
  const endText = gameStatus === GameStatuses.WIN ? winText :
    gameStatus === GameStatuses.LOSE ? looseText :
      exitedText

  return (
    <>
      <h3>VIAJE TERMINADO</h3>
      {endText}
      <h4>Reiniciar misión?</h4>
    </>
  )
}
export default GameEnded;