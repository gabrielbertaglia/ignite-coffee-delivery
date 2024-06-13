import { Container, Aside, Location } from './styles'
import LogoCoffee from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Paragraph } from '../Text'
import { useTheme } from 'styled-components'

export function Header() {
  const theme = useTheme()
  const { coffeeQuantity } = useContext(CartContext)
  return (
    <Container>
      <img src={LogoCoffee} alt="" />

      <Aside>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>

        <Link to="/checkout">
          <>
            <ShoppingCartSimple size={22} weight="fill" />
            {coffeeQuantity > 0 && (
              <>
                <span>
                  <Paragraph variant="s" bold variantColor={theme.white}>
                    {coffeeQuantity}
                  </Paragraph>
                </span>
              </>
            )}
          </>
        </Link>
      </Aside>
    </Container>
  )
}
