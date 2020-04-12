import React from 'react'

interface ContentProps {
  title: string
  subtitle: string
  content: string
}

const Content = ({ title, subtitle, content }: ContentProps) => (
  <section data-testid="content" className="content">
    <h2 className="content__title">{title}</h2>
    <h3 className="content__subtitle">Also known as: {subtitle}</h3>
    <p className="content__text">{content}</p>
  </section>
)

export default Content
