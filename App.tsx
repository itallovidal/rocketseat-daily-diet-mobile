import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/components/global.styles'
import { FormFinish } from './src/screens/form-finish/form-finish'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}>
        <FormFinish />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  )
}
