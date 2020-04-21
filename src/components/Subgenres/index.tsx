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
}

const Subgenres = ({ subgenres }: SubgenresProps) => (
  <ul data-testid="subgenres" className="subgenres">
    {subgenres.map((subgenre, index) => (
      <SubgenresItem key={index} text={subgenre.title} index={index} />
    ))}
  </ul>
)

export default Subgenres
