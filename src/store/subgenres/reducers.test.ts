import { changeSubgenresReducer } from './reducers'
import { CHANGE_SUBGENRES, Subgenres, SubgenresActionTypes } from './types'

describe('Given Subgenres current index is equal 1', () => {
  it('when bumped on "Full-on" button the index should be equal 0', () => {
    const index: Subgenres = { currentIndex: 1 }

    const action: SubgenresActionTypes = {
      type: CHANGE_SUBGENRES,
      payload: { currentIndex: 0 },
    }

    const reducer = changeSubgenresReducer(index, action)

    expect(reducer).toEqual({ currentIndex: 0 })
  })

  it('when bumped on "Dark Psy" button the index should be equal 2', () => {
    const index: Subgenres = { currentIndex: 1 }

    const action: SubgenresActionTypes = {
      type: CHANGE_SUBGENRES,
      payload: { currentIndex: 2 },
    }

    const reducer = changeSubgenresReducer(index, action)

    expect(reducer).toEqual({ currentIndex: 2 })
  })
})
