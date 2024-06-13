import { Paragraph } from '../../../../components/Text'
import {
  Buttons,
  Coffee,
  ContainerTotal,
  ContainerTotalInfo,
  Separator,
  TotalInfo,
} from './styles'

import { Counter } from '../../../../components/Counter'
import { Trash } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { formatCurrency } from '../../../../utils'

const DELIVERY_PRICE = 5.5

export function InfoTotal() {
  const {
    cartItems,
    coffeeQtd,
    removeCoffeeFromCart,
    cartItemsTotal,
    coffeeQuantity,
  } = useContext(CartContext)

  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const totalItems = formatCurrency(cartItemsTotal)

  const totalCart = formatCurrency(cartTotal)

  const deliveryPrice = formatCurrency(DELIVERY_PRICE)

  return (
    <ContainerTotal>
      {cartItems.map((coffee) => {
        const totalCoffee = coffee.price * coffee.quantity
        const priceFormatted = formatCurrency(totalCoffee)

        function handleIncrement() {
          coffeeQtd(coffee.id, 'increment')
        }

        function handleDecrement() {
          if (coffee.quantity > 1) {
            coffeeQtd(coffee.id, 'decrement')
          }
        }

        function handleRemoveCoffeeFromCart() {
          removeCoffeeFromCart(coffee.id)
        }

        return (
          <>
            <Coffee>
              <div>
                <img src={coffee.img} alt="" />
                <div>
                  <Paragraph variant="m">{coffee.name}</Paragraph>

                  <Buttons>
                    <Counter
                      qtd={coffee.quantity}
                      onDecrement={handleDecrement}
                      onIncrement={handleIncrement}
                    />
                    <button onClick={handleRemoveCoffeeFromCart}>
                      <Trash weight="regular" />
                      <span>Remover</span>
                    </button>
                  </Buttons>
                </div>
              </div>
              <Paragraph variant="m" bold>
                R$ {priceFormatted}
              </Paragraph>
            </Coffee>
            <Separator />
          </>
        )
      })}
      <ContainerTotalInfo>
        <TotalInfo>
          <Paragraph variant="s">Total de itens</Paragraph>
          <Paragraph variant="m">R$ {totalItems}</Paragraph>
        </TotalInfo>

        <TotalInfo>
          <Paragraph variant="s">Entrega</Paragraph>
          <Paragraph variant="m">R$ {deliveryPrice}</Paragraph>
        </TotalInfo>

        <TotalInfo>
          <Paragraph variant="l" bold>
            Total
          </Paragraph>
          <Paragraph variant="l" bold>
            R$ {totalCart}
          </Paragraph>
        </TotalInfo>
        <Link
          to={`/success/order/${32}`}
          style={{
            pointerEvents: coffeeQuantity > 0 ? 'auto' : 'none',
          }}
          className={coffeeQuantity <= 0 ? 'disabled' : ''}
        >
          Confirmar Pedido
        </Link>
      </ContainerTotalInfo>
    </ContainerTotal>
  )
}
