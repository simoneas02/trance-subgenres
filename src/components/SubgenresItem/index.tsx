import React, { useContext } from 'react'

import { SubgenresContext } from '../../store/context'
import { CHANGE_SUBGENRES } from '../../store/subgenres/types'

import Button from '../Button'

interface SubgenresItemProps {
  text: string
  index: number
}

const SubgenresItem = ({ text, index }: SubgenresItemProps) => {
  const { dispatch } = useContext(SubgenresContext)

  const handleClickIndex = (index: number) =>
    dispatch({ type: CHANGE_SUBGENRES, payload: { currentIndex: index } })

  return (
    <li>
      <Button text={text} handleClickIndex={() => handleClickIndex(index)} />
    </li>
  )
}

export default SubgenresItem
