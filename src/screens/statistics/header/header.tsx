import { Description, Percentage, Wrapper } from './header.styled'
import { Button } from '../../../components/button/button'
import { ChevronLeft } from 'lucide-react-native'

export function Header() {
  return (
    <Wrapper variant={'diet-in'}>
      <Button
        style={{
          alignSelf: 'flex-start',
        }}
        variant={'transparent'}
        icon={<ChevronLeft size={24} color={'black'} />}
      />
      <Percentage>80%</Percentage>
      <Description>das refeições dentro da dieta.</Description>
    </Wrapper>
  )
}
