import { Header } from '../../components/header/header'
import { Wrapper } from './home.style'
import { DietPercentage } from './components/diet-percentage/diet-percentage'
import { NewMeal } from './components/new-meal/new-meal'
import { DayMealList } from './components/day-meal-list/day-meal-list'

export function Home() {
  return (
    <Wrapper>
      <Header />
      <DietPercentage />
      <NewMeal />
      <DayMealList />
    </Wrapper>
  )
}
