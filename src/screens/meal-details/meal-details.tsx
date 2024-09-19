import { ScreenDescription } from '../../components/screen-description/screen-description'
import { Heading, Text } from '../../components/global.styles'
import { Badge } from '../../components/badge/badge'
import { DetailWrapper, Footer } from './meal-details.style'
import { Button } from '../../components/button/button'
import { SquarePen, Trash2 } from 'lucide-react-native'

export function MealDetails() {
  return (
    <>
      <ScreenDescription variant={'neutral'}>
        Detalhes da Refeição
      </ScreenDescription>
      <DetailWrapper>
        <Heading variant={'black'}>Sanduíche</Heading>
        <Text variant={'neutral'}>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Text>

        <Text variant={'black'}>Data e hora:</Text>
        <Text variant={'neutral'}>12/08/2022 às 16:00h</Text>

        <Badge variant={'diet-in'}>dentro da dieta</Badge>
      </DetailWrapper>

      <Footer>
        <Button
          icon={<SquarePen size={18} color={'white'} />}
          variant={'filled'}
        >
          Editar Refeição
        </Button>
        <Button
          icon={<Trash2 size={18} color={'black'} />}
          variant={'outlined'}
        >
          Excluir Refeição
        </Button>
      </Footer>
    </>
  )
}
