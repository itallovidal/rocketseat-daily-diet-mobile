import { Wrapper } from './new-meal.style'
import { SubHeading } from '../../../../components/global.styles'
import { Button } from '../../../../components/button/button'
import { Plus } from 'lucide-react-native'

export function NewMeal() {
  return (
    <Wrapper>
      <SubHeading weight={'regular'}>Refeições</SubHeading>
      <Button icon={<Plus size={18} color={'white'} />}>Nova Refeição</Button>
    </Wrapper>
  )
}
