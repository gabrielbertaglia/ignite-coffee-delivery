import {
  AsideBottom,
  BottomContainer,
  CardContainer,
  ContainerMiddle,
  Price,
  Tags,
} from './styles'
import americano from '../../../../assets/coffees/americano.png'
import { Title } from '../../../../components/Title'
import { Paragraph } from '../../../../components/Text'
import { useTheme } from 'styled-components'
import { Counter } from '../../../../components/Counter'
import { Link } from 'react-router-dom'
import { ShoppingCartSimple } from '@phosphor-icons/react'

export function Card() {
  const theme = useTheme()

  return (
    <CardContainer>
      <img src={americano} alt="" />

      <Tags>
        <span>Tradicional</span>
        <span>Tradicional</span>
      </Tags>

      <ContainerMiddle>
        <Title variant="s" variantColor={theme['base-subtitle']}>
          Expresso Tradicional
        </Title>
        <Paragraph variant="s" variantColor={theme['base-label']}>
          O tradicional café feito com água quente e grãos moídos
        </Paragraph>
      </ContainerMiddle>

      <BottomContainer>
        <Price>
          <Paragraph variant="s" variantColor={theme['base-text']}>
            R$
          </Paragraph>
          <Title variant="s" variantColor={theme['base-text']}>
            9,90
          </Title>
        </Price>

        <AsideBottom>
          <Counter />

          <Link to={'/'}>
            <ShoppingCartSimple size={22} weight="fill" />
          </Link>
        </AsideBottom>
      </BottomContainer>
    </CardContainer>
  )
}
