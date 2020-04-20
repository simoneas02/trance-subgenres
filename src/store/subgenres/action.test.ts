import { changeSubgenres } from './actions'
import { Subgenres, CHANGE_SUBGENRES } from './types'

describe('Given Subgenres current index is equal 0', () => {
  it('when bumped on "Dark psy" button the index should be equal 2', () => {
    const index: Subgenres = { currentIndex: 2 }

    const action = changeSubgenres(index)

    expect(action).toEqual({
      type: CHANGE_SUBGENRES,
      payload: { currentIndex: 2 },
    })
  })

  it('when bumped on "Progressive Psy" button the index should be equal 1', () => {
    const index: Subgenres = { currentIndex: 1 }

    const action = changeSubgenres(index)

    expect(action).toEqual({
      type: CHANGE_SUBGENRES,
      payload: { currentIndex: 1 },
    })
  })
})
