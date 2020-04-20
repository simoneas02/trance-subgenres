export interface Subgenres {
  currentIndex: number
}

export const CHANGE_SUBGENRES = 'CHANGE_SUBGENRES'

interface ChangeSubgenresAction {
  type: typeof CHANGE_SUBGENRES
  payload: Subgenres
}

export type SubgenresActionTypes = ChangeSubgenresAction
