export const initialState = {
  cellsArray: Array(9).fill(null),
  player: true,
  currentMove: 'Текущий ход: ',
  draw: false,
}

export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'MOVE_PLAYER': {
      return { ...state, player: payload }
    }
    case 'RESET_GAME': {
      return {
        cellsArray: Array(9).fill(null),
        player: true,
        currentMove: 'Текущий ход: ',
      }
    }
    case 'WINNER': {
      return {
        ...state,
        currentMove: payload.currentMove,
        player: payload.player,
      }
    }
    case 'DRAW': {
      return {
        ...state,
        draw: payload,
      }
    }
    default:
      return state
  }
}
