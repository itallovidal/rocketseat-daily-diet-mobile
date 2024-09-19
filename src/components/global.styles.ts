import styled from 'styled-components/native'

export const Title = styled.Text<{ weight: 'bold' | 'regular' }>(
  ({ weight }) => ({
    fontSize: 16,
    fontWeight: weight === 'bold' ? 'bold' : 'regular',
  }),
)

export const theme = {
  colors: {
    redLight: '#F4E6E7',
    redMid: '#F3BABD',
    redDark: '#BF3B44',
    greenLight: '#E5F0DB',
    greenMid: '#CBE4B4',
    greenDark: '#639339',
    white: '#FFFFFF',
    gray100: '#FAFAFA',
    gray200: '#EFF0F0',
    gray300: '#DDDEDF',
    gray400: '#B9BBBC',
    gray500: '#5C6265',
    gray600: '#333638',
    gray700: '#1B1D1E',
  },
} as const

export type ITheme = typeof theme
