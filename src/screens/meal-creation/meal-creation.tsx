import { ScreenDescription } from '../../components/screen-description/screen-description'
import {
  DateTimeWrapper,
  Form,
  Input,
  InputWrapper,
  IsDietInListWrapper,
  Label,
} from './meal-creation.style'
import { useTheme } from 'styled-components'
import { Button } from '../../components/button/button'
import { Dot } from 'lucide-react-native'

export function MealCreation() {
  const theme = useTheme()

  return (
    <>
      <ScreenDescription variant={'neutral'}>Nova Refeição</ScreenDescription>
      <Form>
        <InputWrapper>
          <Label>Nome</Label>
          <Input
            placeholder={'O que comeu hoje?'}
            placeholderTextColor={theme.colors.gray300}
          />
        </InputWrapper>

        <InputWrapper>
          <Label>Descrição</Label>
          <Input
            multiline={true}
            numberOfLines={6}
            textAlignVertical={'top'}
            placeholder={'Como foi a refeição de hoje?'}
            placeholderTextColor={theme.colors.gray300}
          />
        </InputWrapper>

        <DateTimeWrapper>
          <InputWrapper style={{ flex: 1 }}>
            <Label>Data</Label>
            <Input
              placeholderTextColor={theme.colors.gray300}
              editable={false}
            />
          </InputWrapper>

          <InputWrapper style={{ width: '50%' }}>
            <Label>Hora</Label>
            <Input
              placeholderTextColor={theme.colors.gray300}
              editable={false}
            />
          </InputWrapper>
        </DateTimeWrapper>

        <IsDietInListWrapper>
          <Label style={{ width: '100%' }}>Hora</Label>
          <Button
            style={{ flex: 1 }}
            icon={<Dot width={50} color={theme.colors.greenMid} />}
            variant={'light'}
          >
            Sim
          </Button>
          <Button
            style={{ flex: 1 }}
            icon={<Dot size={24} color={theme.colors.redMid} />}
            variant={'light'}
          >
            Não
          </Button>
        </IsDietInListWrapper>
      </Form>
      <Button style={{ marginBottom: 16, marginHorizontal: 16 }}>
        Cadastrar Refeição
      </Button>
    </>
  )
}
