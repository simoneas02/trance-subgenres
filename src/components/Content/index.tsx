import React from 'react'

interface ContentProps {
  content: string
}

const Content = ({ content }: ContentProps) => (
  <section data-testid="content" className="content">
    {content}
  </section>
)

export default Content
