import { Minus, Plus } from '@phosphor-icons/react'
import { CounterContainer } from './styled'
import { Paragraph } from '../Text'

export function Counter() {
  return (
    <CounterContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <Paragraph variant="m">1</Paragraph>
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
