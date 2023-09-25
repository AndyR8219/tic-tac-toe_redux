import './game.css'
import { store } from '../store'
import { winner } from '../helper'

export const Game = () => {
  let win = ''
  const { cellsArray, player } = store.getState()
  const startNewGame = () => {
    store.dispatch({ type: 'RESET_GAME', payload: '' })
  }

  const handleClick = (index) => {
    const { cellsArray, player } = store.getState()
    let currentPlayer
    if (cellsArray[index] === null) {
      if (player) {
        cellsArray[index] = 'X'
      } else {
        cellsArray[index] = 'O'
      }
      currentPlayer = !player
    } else {
      return
    }

    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: currentPlayer,
    })
    if (winner(cellsArray)) {
      win = winner(cellsArray)
      return win
    }
  }
  const isMove = () => {
    return win ? (
      <div className="whoseMove">Победил: {win}</div>
    ) : (
      <div className="whoseMove">Текущий ход: {player ? 'X' : 'O'}</div>
    )
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
