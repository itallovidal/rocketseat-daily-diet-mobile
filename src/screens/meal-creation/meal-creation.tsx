import { ScreenDescription } from '../../components/screen-description/screen-description'
import {
  DateChoosed,
  DateTimeWrapper,
  Form,
  HourChoosed,
  Input,
  InputWrapper,
  IsDietInListWrapper,
  Label,
} from './meal-creation.style'
import { useTheme } from 'styled-components'
import { Button } from '../../components/button/button'
import { DotIcon } from '../../components/dot-icon/dot-icon'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IMealSchema, mealSchema } from './schema'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { addHours, format } from 'date-fns'

export function MealCreation() {
  const theme = useTheme()
  const { control, handleSubmit, setValue, watch } = useForm<IMealSchema>({
    resolver: zodResolver(mealSchema),
    defaultValues: {
      date: new Date(),
      hour: addHours(new Date(), -3),
    },
  })

  async function submitMeal(data: IMealSchema) {
    console.log(data)
  }

  const datePicked = format(watch('date'), 'dd/MM/yyyy')
  const hoursPicked = format(watch('hour'), 'HH:mm')

  const isHealthyFood = watch('isHealthyFood')

  function showDatePicker() {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange: (_, date) => {
        if (date) setValue('date', date)
      },
      mode: 'date',
      is24Hour: true,
      minimumDate: new Date(),
    })
  }

  function showHourPicker() {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange: (_, date) => {
        if (date) setValue('hour', date)
      },
      mode: 'time',
      is24Hour: true,
    })
  }

  return (
    <>
      <ScreenDescription variant={'neutral'}>Nova Refeição</ScreenDescription>
      <Form>
        <Controller
          control={control}
          name={'name'}
          render={({ field: { value, onChange, onBlur } }) => (
            <InputWrapper>
              <Label>Nome</Label>
              <Input
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={'O que comeu hoje?'}
                placeholderTextColor={theme.colors.gray300}
              />
            </InputWrapper>
          )}
        />

        <Controller
          control={control}
          name={'description'}
          render={({ field: { value, onChange, onBlur } }) => (
            <InputWrapper>
              <Label>Descrição</Label>
              <Input
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                multiline={true}
                numberOfLines={6}
                textAlignVertical={'top'}
                placeholder={'Como foi a refeição de hoje?'}
                placeholderTextColor={theme.colors.gray300}
              />
            </InputWrapper>
          )}
        />

        <DateTimeWrapper>
          <InputWrapper style={{ flex: 1 }}>
            <Label>Data</Label>
            <DateChoosed onPress={showDatePicker}>{datePicked}</DateChoosed>
          </InputWrapper>

          <InputWrapper style={{ width: '50%' }}>
            <Label>Hora</Label>
            <HourChoosed onPress={showHourPicker}>{hoursPicked}</HourChoosed>
          </InputWrapper>
        </DateTimeWrapper>

        <IsDietInListWrapper>
          <Label style={{ width: '100%' }}>Está dentro da Dieta?</Label>
          <Button
            onPress={() => setValue('isHealthyFood', true)}
            style={{ flex: 1 }}
            icon={<DotIcon variant={'diet-in'} />}
            variant={isHealthyFood ? 'diet-in' : 'light'}
          >
            Sim
          </Button>
          <Button
            onPress={() => setValue('isHealthyFood', false)}
            style={{ flex: 1 }}
            icon={<DotIcon variant={'diet-out'} />}
            variant={!isHealthyFood ? 'diet-out' : 'light'}
          >
            Não
          </Button>
        </IsDietInListWrapper>
      </Form>
      <Button
        onPress={handleSubmit(submitMeal)}
        style={{ marginBottom: 16, marginHorizontal: 16 }}
      >
        Cadastrar Refeição
      </Button>
    </>
  )
}
