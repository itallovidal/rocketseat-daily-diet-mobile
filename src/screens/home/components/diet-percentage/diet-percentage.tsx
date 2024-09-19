import { Description, Icon, Percentage, Wrapper } from './diet-percentage.style'
import { ChevronRight } from 'lucide-react-native'

export function DietPercentage() {
  return (
    <Wrapper variant={'diet-in'}>
      <Icon>
        <ChevronRight size={32} color={'black'} />
      </Icon>
      <Percentage>90,86%</Percentage>
      <Description> das refeições dentro da dieta.</Description>
    </Wrapper>
  )
}
