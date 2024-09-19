import { Description, Hour, Wrapper, Dot } from './ meal-card.style'

export function MealCard() {
  return (
    <Wrapper>
      <Hour>20:00</Hour>
      <Description>Whey protein com leite.</Description>
      <Dot variant={'diet-in'} />
    </Wrapper>
  )
}
