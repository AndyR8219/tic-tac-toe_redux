import './game.css'
import { store } from '../store'

export const Game = () => {
  const { cellsArray, player } = store.getState()
  const startNewGame = () => {
    store.dispatch({ type: 'RESET_GAME', payload: '' })
    // console.log('RESET_GAME')
  }

  const handleClick = (index) => {
    console.log('handleClick', player, cellsArray)
    let temp
    if (cellsArray[index] === null) {
      cellsArray[index] = player
      temp = !player
    }

    store.dispatch({ type: 'MOVE_PLAYER', payload: temp })
    // console.log('MOVE_PLAYER', index)
  }
  const isMove = () => {
    return <div className="whoseMove">Текущий ход: {player ? 'X' : 'O'}</div>
  }

  return (
    <div className="wrapper">
      <button className="start__btn" onClick={startNewGame}>
        Начать заново
      </button>
      <div className="container">
        {cellsArray.map((square, i) => (
          <button key={i} className="square" onClick={() => handleClick(i)}>
            {square}
          </button>
        ))}
      </div>
      <div className="info">Информация</div>
      {isMove()}
    </div>
  )
}
