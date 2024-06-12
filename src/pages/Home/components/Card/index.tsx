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
import { Coffee } from '../../../../@types/coffee'

type CardProps = {
  coffee: Coffee
}

export function Card({ coffee }: CardProps) {
  const theme = useTheme()

  const { description, id, img, name, price, tags } = coffee

  const newPrice = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(price)

  return (
    <CardContainer>
      <img src={img} alt={name} />

      <Tags tags={tags}>
        {tags.map((tag) => (
          <span key={tag.id}>{tag.name}</span>
        ))}
      </Tags>

      <ContainerMiddle>
        <Title variant="s" variantColor={theme['base-subtitle']}>
          {name}
        </Title>
        <Paragraph variant="s" variantColor={theme['base-label']}>
          {description}
        </Paragraph>
      </ContainerMiddle>

      <BottomContainer>
        <Price>
          <Paragraph variant="s" variantColor={theme['base-text']}>
            R$
          </Paragraph>
          <Title variant="s" variantColor={theme['base-text']}>
            {newPrice}
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
