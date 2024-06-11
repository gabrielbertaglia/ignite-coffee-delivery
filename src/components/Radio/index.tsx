import { Container, RadioProps } from './styled'

export function Radio({ children, isSelected, ...props }: RadioProps) {
  return (
    <Container isSelected={isSelected}>
      <input type="radio" {...props} />
      {children}
    </Container>
  )
}
