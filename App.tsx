import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { Home } from './src/screens/home/home'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/components/global.styles'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ paddingTop: 40, flex: 1 }}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  )
}
