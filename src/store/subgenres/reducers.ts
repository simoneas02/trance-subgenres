import { Subgenres, CHANGE_SUBGENRES, SubgenresActionTypes } from './types'

const initialState: Subgenres = {
  currentIndex: 0,
}

const changeSubgenresReducer = (
  state = initialState,
  action: SubgenresActionTypes
) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_SUBGENRES:
      return { ...state, currentIndex: payload.currentIndex }
    default:
      return state
  }
}

export { changeSubgenresReducer, initialState }
