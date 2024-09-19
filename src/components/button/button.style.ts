import styled from 'styled-components/native'

const buttonVariant = {
  filled: {
    backgroundColor: '#333638',
    color: 'white',
  },
  outlined: {
    backgroundColor: 'white',
    color: '#333638',
  },
}

export type ButtonVariantStyle = keyof typeof buttonVariant

export const Wrapper = styled.TouchableOpacity<{
  variant: ButtonVariantStyle
}>(({ variant }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  padding: 16,
  borderRadius: 8,
  gap: 8,

  background: buttonVariant[variant].backgroundColor,
}))

export const Text = styled.Text<{ variant: ButtonVariantStyle }>(
  ({ variant }) => ({
    fontSize: 18,
    color: buttonVariant[variant].color,
  }),
)
