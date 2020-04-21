import React, { useContext, useMemo } from 'react'

import { SubgenresContext } from '../../store/subgenres/context'
import { CHANGE_SUBGENRES } from '../../store/subgenres/types'

import Button from '../Button'

interface SubgenresItemProps {
  text: string
  index: number
}

const SubgenresItem = ({ text, index }: SubgenresItemProps) => {
  const { dispatch } = useContext(SubgenresContext)

  const handleClickIndexMemo = useMemo(
    () => (index: number) =>
      dispatch({ type: CHANGE_SUBGENRES, payload: { currentIndex: index } }),
    [dispatch]
  )

  return (
    <li>
      <Button
        text={text}
        handleClickIndex={() => handleClickIndexMemo(index)}
      />
    </li>
  )
}

export default SubgenresItem
