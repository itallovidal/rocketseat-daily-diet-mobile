import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/components/global.styles'
import { MealCreation } from './src/screens/meal-creation/meal-creation'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}>
        <MealCreation />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  )
}
