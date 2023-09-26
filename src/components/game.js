import './game.css'
import { store } from '../store'
import { winner } from '../helper'

export const Game = () => {
  const { cellsArray, player, currentMove, draw } = store.getState()
  const startNewGame = () => {
    store.dispatch({ type: 'RESET_GAME', payload: '' })
  }

  const handleClick = (index) => {
    const { cellsArray, player } = store.getState()

    let currentPlayer
    let currentMove = 'Победил: '

    if (cellsArray[index] === null && !winner(cellsArray)) {
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
      store.dispatch({
        type: 'WINNER',
        payload: { player, currentMove },
      })
    }
    if (!winner(cellsArray) && !cellsArray.includes(null)) {
      store.dispatch({
        type: 'DRAW',
        payload: true,
      })
    }
  }

  const isMove = () => {
    return draw ? (
      <div className="whoseMove">Ничья</div>
    ) : (
      <div className="whoseMove">
        {currentMove} {player ? 'X' : 'O'}
      </div>
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
