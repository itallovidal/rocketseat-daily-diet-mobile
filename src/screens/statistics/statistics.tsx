import { StatsWrapper, Wrapper } from './statistics.style'
import { Header } from './header/header'
import { Text } from '../../components/global.styles'
import { StatsCard } from './card/stats-card'

export function Statistics() {
  return (
    <Wrapper>
      <Header />

      <StatsWrapper>
        <Text style={{ marginBottom: 12 }} weight={'bold'}>
          Estatísticas Gerais
        </Text>

        <StatsCard
          variant={'neutral'}
          info={{
            title: '22',
            description: 'Melhor Sequência de pratos dentro da dieta.',
          }}
        />

        <StatsCard
          variant={'neutral'}
          info={{
            title: '109',
            description: 'Refeições Registradas',
          }}
        />
        <StatsCard
          variant={'diet-in'}
          info={{
            title: '99',
            description: 'Refeições dentro da dieta',
          }}
        />

        <StatsCard
          variant={'diet-out'}
          info={{
            title: '10',
            description: 'Refeições fora da dieta',
          }}
        />
      </StatsWrapper>
    </Wrapper>
  )
}
