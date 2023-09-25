export const initialState = {
  cellsArray: Array(9).fill(null),
  player: true,
}

export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'MOVE_PLAYER': {
      return { ...state, player: payload }
    }
    case 'RESET_GAME': {
      return { cellsArray: Array(9).fill(null), player: true }
    }

    default:
      return state
  }
}
