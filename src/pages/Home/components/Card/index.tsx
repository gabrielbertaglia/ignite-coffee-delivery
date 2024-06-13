import {
  AsideBottom,
  BottomContainer,
  CardContainer,
  ContainerMiddle,
  Price,
  Tags,
} from './styles'
import { Title } from '../../../../components/Title'
import { Paragraph } from '../../../../components/Text'
import { useTheme } from 'styled-components'
import { Counter } from '../../../../components/Counter'
import { Link } from 'react-router-dom'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { Coffee } from '../../../../@types/coffee'

import { useContext, useState } from 'react'
import { CartContext } from '../../../../context/CartContext'

type CardProps = {
  coffee: Coffee
}

export function Card({ coffee }: CardProps) {
  const theme = useTheme()

  const { description, img, name, price, tags } = coffee

  const [qtd, setQtd] = useState(1)

  const { addCoffeeToCart } = useContext(CartContext)

  const newPrice = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(price)

  function handleAddCoffeeToCard() {
    const coffeeToAdd = {
      ...coffee,
      quantity: qtd,
    }
    addCoffeeToCart(coffeeToAdd)
  }
  function handleDecrementQtd() {
    if (qtd > 1) {
      setQtd((state) => state - 1)
    }
  }

  function handleIncrementQtd() {
    setQtd((state) => state + 1)
  }

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
          <Counter
            qtd={qtd}
            onDecrement={handleDecrementQtd}
            onIncrement={handleIncrementQtd}
          />

          <Link to={'/'} onClick={handleAddCoffeeToCard}>
            <ShoppingCartSimple size={22} weight="fill" />
          </Link>
        </AsideBottom>
      </BottomContainer>
    </CardContainer>
  )
}
