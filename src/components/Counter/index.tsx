import { Minus, Plus } from '@phosphor-icons/react'
import { CounterContainer } from './styled'
import { Paragraph } from '../Text'

interface Counter {
  qtd: number
  onIncrement: () => void
  onDecrement: () => void
}

export function Counter({ qtd, onDecrement, onIncrement }: Counter) {
  return (
    <CounterContainer>
      <button onClick={onDecrement}>
        <Minus size={14} weight="bold" />
      </button>
      <Paragraph variant="m">{qtd}</Paragraph>
      <button onClick={onIncrement}>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
