/* eslint-disable react/display-name */
import { forwardRef, HTMLAttributes, InputHTMLAttributes } from 'react'
import { Box, Container, ErrorMessage, InputForm } from './styles'
import { Paragraph } from '../Text'
import { FieldError } from 'react-hook-form'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  error?: FieldError
  containerProps?: HTMLAttributes<HTMLDivElement>
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ optional, containerProps, error, ...props }, ref) => {
    return (
      <Box {...containerProps}>
        <Container hasError={!!error}>
          <InputForm ref={ref} {...props} />
          {optional && <span>Opcional</span>}
        </Container>
        {error?.message ? (
          <ErrorMessage role="alert">
            <Paragraph variant="xs">{error?.message}</Paragraph>
          </ErrorMessage>
        ) : null}
      </Box>
    )
  },
)
