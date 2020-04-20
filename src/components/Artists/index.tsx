import React from 'react'
import ArtistsItem from '../ArtistsItem'

export interface ArtistsProps {
  infos: string[]
}

const Artists = ({ infos }: ArtistsProps) => (
  <section className="artists">
    <h2 className="artist__title" data-testid="artists-title">
      Notable artists:
    </h2>

    <ul className="artists__list" data-testid="artists">
      {infos.map((artist, index) => (
        <ArtistsItem key={`${artist}-${index}`} artist={artist} />
      ))}
    </ul>
  </section>
)

export default Artists
