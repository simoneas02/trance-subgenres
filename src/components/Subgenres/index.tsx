import React from 'react'

import SubgenresItem from '../SubgenresItem'

interface SubgenresProps {
  subgenres: {
    id?: string
    title: string
    src?: string
    alt?: string
    subTitle?: string
    bpm?: { min: number; max: number }
    content?: string
    artists?: string[]
  }[]
  handleClickIndex: (index: number) => void
}

const Subgenres = ({ subgenres, handleClickIndex }: SubgenresProps) => (
  <ul data-testid="subgenres" className="subgenres">
    {subgenres.map((subgenre, index) => (
      <SubgenresItem
        key={index}
        text={subgenre.title}
        handleClickIndex={(index) => handleClickIndex(index)}
        index={index}
      />
    ))}
  </ul>
)

export default Subgenres
