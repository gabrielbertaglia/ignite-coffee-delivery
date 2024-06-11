import { HTMLAttributes, InputHTMLAttributes } from 'react'
import { Box, Container, InputForm } from './styles'
import { FieldError } from 'react-hook-form'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  error?: FieldError
  containerProps?: HTMLAttributes<HTMLDivElement>
}

export function Input({ optional, containerProps, ...props }: InputProps) {
  return (
    <Box {...containerProps}>
      <Container>
        <InputForm {...props} />
      </Container>
      {optional && <span>Opcional</span>}
    </Box>
  )
}
