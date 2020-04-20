import React from 'react'

interface BPMProps {
  min: number
  max: number
}

const BPM = ({ min, max }: BPMProps) => (
  <section data-testid="bpm" className="bpm">
    <h3 className="bpm__title" data-testid="bpm-title">
      BPM range:
    </h3>
    <div className="bpm__range">
      <span className="bpm__value" data-testid="bpm-min">
        {min}
      </span>
      <span className="bpm__value" data-testid="bpm-max">
        {max}
      </span>
    </div>
  </section>
)
export default BPM
