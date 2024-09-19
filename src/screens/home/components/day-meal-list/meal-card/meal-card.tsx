import { Description, Hour, Wrapper, Dot } from './ meal-card.style'

export interface IMealInfo {
  date: string
  meal: string
  status: 'diet-in' | 'diet-out'
}

interface IMealCardProps {
  info: IMealInfo
}

export function MealCard({ info: { meal, status, date } }: IMealCardProps) {
  return (
    <Wrapper>
      <Hour>{date}</Hour>
      <Description>{meal}</Description>
      <Dot variant={status} />
    </Wrapper>
  )
}
