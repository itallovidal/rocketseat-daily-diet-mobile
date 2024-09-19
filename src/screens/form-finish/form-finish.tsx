import Happy from '../../assets/happy.svg'
import Sad from '../../assets/sad.svg'
import { Header, Wrapper } from './form-finish.style'
import { Heading, SubHeading } from '../../components/global.styles'
import { Button } from '../../components/button/button'

export function FormFinish() {
  const isBad = true

  return (
    <Wrapper>
      {isBad ? <BadMeal /> : <GoodMeal />}
      <Button style={{ marginTop: 48 }} variant={'filled'}>
        Ir para página inicial
      </Button>
    </Wrapper>
  )
}

function GoodMeal() {
  return (
    <>
      <Header>
        <Heading style={{ textAlign: 'center' }} variant={'diet-in'}>
          Continue assim!
        </Heading>
        <SubHeading style={{ textAlign: 'center' }} variant={'neutral'}>
          Você continua dentro da dieta. Muito bem!
        </SubHeading>
      </Header>
      <Happy />
    </>
  )
}

function BadMeal() {
  return (
    <>
      <Header>
        <Heading style={{ textAlign: 'center' }} variant={'diet-out'}>
          Que pena!
        </Heading>
        <SubHeading style={{ textAlign: 'center' }} variant={'neutral'}>
          Você saiu da dieta dessa vez, mas continue se esforçando e não
          desista!
        </SubHeading>
      </Header>
      <Sad />
    </>
  )
}
