import React from 'react'
import { Card, CardStyleProps } from './stats-card.style'

interface IStatsCardProps {
  variant: CardStyleProps
  info: {
    title: string
    description: string
  }
}

export function StatsCard({
  variant,
  info: { title, description },
}: IStatsCardProps) {
  return (
    <Card.Wrapper variant={variant}>
      <Card.Title>{title}</Card.Title>
      <Card.Description>{description}</Card.Description>
    </Card.Wrapper>
  )
}
