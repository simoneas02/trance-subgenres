import { Subgenres, CHANGE_SUBGENRES } from './types'

const changeSubgenres = (currentIndex: Subgenres) => ({
  type: CHANGE_SUBGENRES,
  payload: currentIndex,
})

export { changeSubgenres }
