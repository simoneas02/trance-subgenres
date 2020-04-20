import React from 'react'

import './figure.css'

interface FigureProps {
  src: string
  alt: string
}

const Figure = ({ src, alt }: FigureProps) => (
  <figure data-testid="figure">
    <img data-testid="figure-img" src={src} alt={alt} className="figure__img" />
  </figure>
)

export default Figure
