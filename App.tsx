import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/components/global.styles'
import { MealDetails } from './src/screens/meal-details/meal-details'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}>
        <MealDetails />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  )
}
