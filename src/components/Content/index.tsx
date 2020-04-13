import React from 'react'

interface ContentProps {
  title: string
  subtitle: string
  content: string
}

const Content = ({ title, subtitle, content }: ContentProps) => (
  <section data-testid="content" className="content">
    <h2 data-testid="content-title" className="content__title">
      {title}
    </h2>
    <h3 data-testid="content-subtitle" className="content__subtitle">
      Also known as: {subtitle}
    </h3>
    <p data-testid="content-text" className="content__text">
      {content}
    </p>
  </section>
)

export default Content
