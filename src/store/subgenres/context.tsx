import React, { createContext, Dispatch, useReducer } from 'react'

import { changeSubgenresReducer, initialState } from './reducers'
import { Subgenres, SubgenresActionTypes } from './types'

const SubgenresContext = createContext<{
  state: Subgenres
  dispatch: Dispatch<SubgenresActionTypes>
}>({
  state: initialState,
  dispatch: () => null,
})

const SubgenresProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(changeSubgenresReducer, initialState)

  return (
    <SubgenresContext.Provider value={{ state, dispatch }}>
      {children}
    </SubgenresContext.Provider>
  )
}

export { SubgenresProvider, SubgenresContext }
