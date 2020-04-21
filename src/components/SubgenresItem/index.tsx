import React from 'react'
import Button from '../Button'

interface SubgenresItemProps {
  text: string
  handleClickIndex: (index: number) => void
  index: number
}

const SubgenresItem = ({
  text,
  handleClickIndex,
  index,
}: SubgenresItemProps) => (
  <li>
    <Button text={text} handleClickIndex={() => handleClickIndex(index)} />
  </li>
)

export default SubgenresItem
