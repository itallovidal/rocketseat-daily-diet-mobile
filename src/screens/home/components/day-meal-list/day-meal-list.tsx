import { List } from './day-meal-list.styled'
import { IMealInfo, MealCard } from './meal-card/meal-card'
import { Title } from '../../../../components/global.styles'

const TEMP: { title: string; data: IMealInfo[] }[] = [
  {
    title: '12.08.22',
    data: [
      {
        date: '20:00',
        meal: 'X tudo',
        status: 'diet-out',
      },
      {
        date: '15:00',
        meal: 'Whey protein com leite.',
        status: 'diet-in',
      },
      {
        date: '12:00',
        meal: 'Almoço saudável.',
        status: 'diet-in',
      },
      {
        date: '09:00',
        meal: 'Saladinha boa.',
        status: 'diet-in',
      },
    ],
  },
  {
    title: '13.08.22',
    data: [
      {
        date: '19:30',
        meal: 'Pizza de calabresa.',
        status: 'diet-out',
      },
      {
        date: '14:30',
        meal: 'Frango grelhado com salada.',
        status: 'diet-in',
      },
      {
        date: '11:30',
        meal: 'Omelete de claras.',
        status: 'diet-in',
      },
      {
        date: '08:30',
        meal: 'Iogurte natural com aveia.',
        status: 'diet-in',
      },
    ],
  },
  {
    title: '14.08.22',
    data: [
      {
        date: '21:00',
        meal: 'Hambúrguer artesanal.',
        status: 'diet-out',
      },
      {
        date: '16:00',
        meal: 'Suco verde e frutas.',
        status: 'diet-in',
      },
      {
        date: '12:30',
        meal: 'Peixe assado com legumes.',
        status: 'diet-in',
      },
      {
        date: '07:45',
        meal: 'Tapioca com queijo branco.',
        status: 'diet-in',
      },
    ],
  },
  {
    title: '15.08.22',
    data: [
      {
        date: '20:00',
        meal: 'Lasanha de carne.',
        status: 'diet-out',
      },
      {
        date: '15:00',
        meal: 'Shake de proteínas.',
        status: 'diet-in',
      },
      {
        date: '13:00',
        meal: 'Salada de grão-de-bico.',
        status: 'diet-in',
      },
      {
        date: '09:30',
        meal: 'Café preto e pão integral.',
        status: 'diet-in',
      },
    ],
  },
  {
    title: '16.08.22',
    data: [
      {
        date: '18:30',
        meal: 'Sushi.',
        status: 'diet-out',
      },
      {
        date: '14:00',
        meal: 'Sanduíche natural.',
        status: 'diet-in',
      },
      {
        date: '12:00',
        meal: 'Filé de frango com quinoa.',
        status: 'diet-in',
      },
      {
        date: '08:00',
        meal: 'Vitamina de banana com aveia.',
        status: 'diet-in',
      },
    ],
  },
]

export function DayMealList() {
  return (
    <List<IMealInfo, { title: string; data: IMealInfo[] }>
      contentContainerStyle={{
        gap: 12,
      }}
      sections={TEMP}
      keyExtractor={(item) => item.meal}
      renderItem={({ item }: { item: IMealInfo }) => <MealCard info={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Title weight={'regular'}>{title}</Title>
      )}
    />
  )
}
