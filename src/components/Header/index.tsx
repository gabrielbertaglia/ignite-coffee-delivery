import { Container, Aside, Location } from './styles'
import LogoCoffee from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Paragraph } from '../Text'
import { useTheme } from 'styled-components'
import { LocationType } from '../../pages/Success'

export function Header() {
  const theme = useTheme()
  const { coffeeQuantity } = useContext(CartContext)
  const { state } = useLocation() as LocationType

  return (
    <Container>
      <Link to={'/'}>
        <img src={LogoCoffee} alt="" />
      </Link>

      <Aside>
        {state && Object.keys(state).length !== 0 ? (
          <Location>
            <MapPin size={22} weight="fill" />
            <span>
              {state.city}, {state.state}
            </span>
          </Location>
        ) : (
          <></>
        )}

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
